import { Priority } from '../../CreateTaskForm/enums/Priority'
import { Status } from '../../CreateTaskForm/enums/Status'

// Task Entity from BE
export interface ITaskEntity {
  id: string
  date: string
  title: string
  description: string

  status: `${Status}` // "Todo" | "InProgress" | "Completed"
  priority: `${Priority}` // "High" | "Normal" | "Low"
}
