import { Status } from '../../CreateTaskForm/enums/Status'

export type TaskCounterStatusType =
  | Status.Todo
  | Status.InProgress
  | Status.Completed

export interface ITaskCounter {
  count?: number
  status?: TaskCounterStatusType
}
