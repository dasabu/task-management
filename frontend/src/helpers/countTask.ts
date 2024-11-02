import { ITaskEntity } from '../components/TaskArea/interfaces/ITask'
import { TaskCounterStatusType } from '../components/TaskCounter/interfaces/ITaskCounter'

export const countTask = (
  tasks: ITaskEntity[],
  status: TaskCounterStatusType
): number => {
  if (!Array.isArray(tasks)) {
    return 0
  }
  const totalTasks = tasks.filter(
    (task) => task.status === status
  )

  return totalTasks.length
}
