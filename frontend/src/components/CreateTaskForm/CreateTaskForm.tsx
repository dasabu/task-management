import {
  Box,
  Stack,
  Typography,
  Button,
  LinearProgress,
  Alert,
  AlertTitle
} from '@mui/material'

import { TaskTitleField } from './_TaskTitleField'
import { TaskDescriptionField } from './_TaskDescriptionField'
import { TaskDateField } from './_TaskDateField'
import { TaskSelectField } from './_TaskSelectField'
import { Status } from './enums/Status'
import { Priority } from './enums/Priority'
import { useContext, useEffect, useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { sendApiRequest } from '../../helpers/sendApiRequest'
import { ICreateTask } from '../TaskArea/interfaces/ICreateTask'
import { TaskStatusChangeContext } from '../../context/TaskStatusChange.context'

export const CreateTaskForm = () => {
  const [title, setTitle] = useState<string | undefined>(
    undefined
  )
  const [description, setDescription] = useState<
    string | undefined
  >(undefined)
  const [date, setDate] = useState<Date | null>(null)
  const [status, setStatus] = useState<string>(Status.Todo)
  const [priority, setPriority] = useState<string>(
    Priority.Normal
  )
  const [
    isTaskCreatedSuccessfully,
    setIsTaskCreatedSuccessfully
  ] = useState<boolean | null>(null)

  const tasksUpdatedContext = useContext(
    TaskStatusChangeContext
  )

  // Create task mutation
  const createTaskMutation = useMutation({
    mutationFn: (data: ICreateTask) =>
      sendApiRequest(
        'http://localhost:5002/api/v1/tasks',
        'POST',
        data
      ),
    onSuccess: () => {
      setIsTaskCreatedSuccessfully(true)
      tasksUpdatedContext.toggle()
    },
    onError: () => setIsTaskCreatedSuccessfully(false)
  })

  // Clear alert after 5s
  useEffect(() => {
    if (isTaskCreatedSuccessfully !== null) {
      const successTimeout = setTimeout(() => {
        setIsTaskCreatedSuccessfully(null)
      }, 5000)

      return () => {
        clearTimeout(successTimeout)
      }
    }
  }, [isTaskCreatedSuccessfully])

  const createTaskHandler = () => {
    if (
      !title ||
      !date ||
      !description ||
      !status ||
      !priority
    ) {
      return
    }
    const task: ICreateTask = {
      title,
      description,
      date: date.toString(),
      status,
      priority
    }
    createTaskMutation.mutate(task)
  }

  const disableButtonHandler =
    !title ||
    !description ||
    !date ||
    !status ||
    !priority ||
    createTaskMutation.isPending

  return (
    <Box
      display='flex'
      flexDirection='column'
      alignItems='flex-start'
      width='100%'
      px={4}
      my={6}
    >
      {isTaskCreatedSuccessfully && (
        <Alert
          severity='success'
          sx={{ width: '100%', marginBottom: '16px' }}
        >
          <AlertTitle>Success</AlertTitle>
          Your task has been created successfully
        </Alert>
      )}
      {isTaskCreatedSuccessfully === false && (
        <Alert
          severity='error'
          sx={{ width: '100%', marginBottom: '16px' }}
        >
          <AlertTitle>Error</AlertTitle>
          An error occurred while creating task. Please try
          again
        </Alert>
      )}
      <Typography mb={2} component='h2' variant='h6'>
        Create a task
      </Typography>
      <Stack sx={{ width: '100%' }} spacing={3}>
        <TaskTitleField
          disabled={createTaskMutation.isPending}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TaskDescriptionField
          disabled={createTaskMutation.isPending}
          onChange={(e) => setDescription(e.target.value)}
        />
        <TaskDateField
          disabled={createTaskMutation.isPending}
          value={date}
          onChange={(date) => setDate(date)}
        />
        <Stack
          direction='row'
          sx={{ width: '100%' }}
          spacing={2}
        >
          <TaskSelectField
            name='Status'
            label='status'
            value={status}
            disabled={createTaskMutation.isPending}
            onChange={(e) => setStatus(e.target.value)}
            items={[
              {
                value: Status.Todo,
                label: Status.Todo
              },
              {
                value: Status.InProgress,
                label: Status.InProgress
              },
              {
                value: Status.Completed,
                label: Status.Completed
              }
            ]}
          />
          <TaskSelectField
            name='Priority'
            label='priority'
            value={priority}
            disabled={createTaskMutation.isPending}
            onChange={(e) => setPriority(e.target.value)}
            items={[
              {
                value: Priority.High,
                label: Priority.High
              },
              {
                value: Priority.Normal,
                label: Priority.Normal
              },
              {
                value: Priority.Low,
                label: Priority.Low
              }
            ]}
          />
        </Stack>
        {createTaskMutation.isPending && <LinearProgress />}
        <Button
          variant='contained'
          size='large'
          fullWidth
          onClick={createTaskHandler}
          disabled={disableButtonHandler}
        >
          Create a Task
        </Button>
      </Stack>
    </Box>
  )
}
