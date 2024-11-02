import {
  Alert,
  AlertTitle,
  Box,
  LinearProgress,
  Typography
} from '@mui/material'
import Grid from '@mui/material/Grid2'
import { format } from 'date-fns'

import TaskCounter from '../TaskCounter'
import { Status } from '../CreateTaskForm/enums/Status'
import {
  FC,
  ReactElement,
  useContext,
  useEffect,
  useState
} from 'react'
import {
  useQuery,
  useMutation
} from '@tanstack/react-query'
import { sendApiRequest } from '../../helpers/sendApiRequest'
import { ITaskEntity } from './interfaces/ITask'
import { ITaskInfo } from '../TaskInfo/interfaces/ITaskInfo'
import TaskInfo from '../TaskInfo'
import { IBackendResponse } from '../../helpers/backend'
import { IUpdateTask } from './interfaces/IUpdateTask'
import { countTask } from '../../helpers/countTask'
import { TaskStatusChangeContext } from '../../context/TaskStatusChange.context'

export const TaskArea: FC<ITaskInfo> = (): ReactElement => {
  const [tasks, setTasks] = useState<ITaskEntity[]>([])
  const taskUpdatedChangeContext = useContext(
    TaskStatusChangeContext
  )

  const { data, isPending, error, refetch } = useQuery({
    queryKey: ['tasks'],
    queryFn: async () =>
      sendApiRequest<IBackendResponse<ITaskEntity[]>>(
        'http://localhost:5002/api/v1/tasks',
        'GET'
      )
  })

  useEffect(() => {
    if (data?.data && Array.isArray(data.data)) {
      setTasks(data.data)
    }
    console.log(tasks)
  }, [data?.data])

  // Update task mutation
  const updateTaskMutation = useMutation({
    mutationFn: (data: IUpdateTask) =>
      sendApiRequest(
        'http://localhost:5002/api/v1/tasks',
        'PATCH',
        data
      )
  })

  const onStatusChangeHandler = (
    id: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    updateTaskMutation.mutate({
      id,
      status: e.target.checked
        ? Status.InProgress
        : Status.Todo
    })
  }

  const markCompletedHandler = (
    id: string,
    e:
      | React.MouseEvent<HTMLButtonElement>
      | React.MouseEvent<HTMLAnchorElement>
  ) => {
    updateTaskMutation.mutate({
      id,
      status: Status.Completed
    })
  }

  // Side effect: when a task is updated -> toggle the updated state (invoke the below side effect)
  useEffect(() => {
    if (updateTaskMutation.isSuccess) {
      taskUpdatedChangeContext.toggle()
    }
  }, [updateTaskMutation.isSuccess])

  // Side effect: when the updated state change, refetch all the tasks
  useEffect(() => {
    refetch()
  }, [taskUpdatedChangeContext.updated])

  return (
    <Grid size={{ md: 8 }} px={4} mt={4}>
      <Box mb={8} px={4}>
        <Typography variant='h6' fontWeight='bold'>
          Task Status: {format(new Date(), 'PPPP')}
        </Typography>
      </Box>
      <Grid
        container
        display='flex'
        flexDirection='column'
        justifyContent='center'
      >
        <Grid
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            mb: 8
          }}
        >
          <TaskCounter
            count={
              tasks
                ? countTask(tasks, Status.Todo)
                : undefined
            }
            status={Status.Todo}
          />
          <TaskCounter
            count={
              tasks
                ? countTask(tasks, Status.InProgress)
                : undefined
            }
            status={Status.InProgress}
          />
          <TaskCounter
            count={
              tasks
                ? countTask(tasks, Status.Completed)
                : undefined
            }
            status={Status.Completed}
          />
        </Grid>
        <Grid
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            xs: 10,
            md: 8
          }}
        >
          {error && (
            <Alert severity='error'>
              <AlertTitle>
                An error occurred while fetching tasks.
                Please try again
              </AlertTitle>
            </Alert>
          )}
          {!error && tasks.length === 0 && (
            <Alert severity='warning'>
              <AlertTitle>
                No tasks were found. Let's start creating
                your tasks
              </AlertTitle>
            </Alert>
          )}
          {isPending ? (
            <LinearProgress />
          ) : (
            tasks &&
            tasks.length > 0 &&
            tasks.map((task, index) => {
              return task.status !== Status.Completed ? (
                <TaskInfo
                  key={index}
                  id={task.id}
                  title={task.title}
                  date={new Date(task.date)}
                  description={task.description}
                  status={task.status}
                  priority={task.priority}
                  onStatusChange={onStatusChangeHandler}
                  onClick={markCompletedHandler}
                />
              ) : (
                false
              )
            })
          )}
        </Grid>
      </Grid>
    </Grid>
  )
}
