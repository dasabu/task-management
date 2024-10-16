import { Request, Response } from 'express'
import { instanceToPlain } from 'class-transformer'
import { dataSource } from '../index'
import { Task } from './task.entity'

class TasksController {
  async getAll(req: Request, res: Response): Promise<Response> {
    try {
      let tasks = await dataSource.getRepository(Task).find({
        order: {
          date: 'ASC'
        }
      })
      tasks = instanceToPlain(tasks) as Task[]
      return res.status(200).json({ data: tasks })
    } catch (error) {
      console.error(`An error occurred in TaskController.getAll:: ${error}`)
      return res.status(500).json({ error })
    }
  }
}

export const tasksController = new TasksController()
