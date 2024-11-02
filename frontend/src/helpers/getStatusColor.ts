import { Status } from '../components/CreateTaskForm/enums/Status'
import { TaskCounterStatusType } from '../components/TaskCounter/interfaces/ITaskCounter'

export const getStatusColor = (
  status: TaskCounterStatusType
): string => {
  switch (status) {
    case Status.Todo:
      return 'error.light'
    case Status.InProgress:
      return 'warning.light'
    case Status.Completed:
      return 'success.light'
  }
}
