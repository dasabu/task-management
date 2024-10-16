import { Status } from './../enums/Status'
import { Request, Response } from 'express'
import { instanceToPlain } from 'class-transformer'
import { dataSource } from '../index'
import { Task } from './task.entity'
import { validationResult } from 'express-validator'

class TasksController {
  async getAll(req: Request, res: Response): Promise<Response> {
    try {
      let allTasks = await dataSource.getRepository(Task).find({
        order: {
          date: 'ASC'
        }
      })
      allTasks = instanceToPlain(allTasks) as Task[]
      return res.status(200).json({ data: allTasks })
    } catch (error) {
      console.error(`An error occurred in TaskController.getAll:: ${error}`)
      return res.status(500).json({ error })
    }
  }

  async create(req: Request, res: Response): Promise<Response> {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array() })
    }

    const newTask = new Task()

    newTask.title = req.body.title
    newTask.date = req.body.date
    newTask.description = req.body.description
    newTask.priority = req.body.priority
    newTask.status = req.body.status

    try {
      let createdTask = await dataSource.getRepository(Task).save(newTask)
      createdTask = instanceToPlain(createdTask) as Task
      return res.status(201).json({ data: createdTask })
    } catch (error) {
      console.error(`An error occurred in TaskController.create:: ${error}`)
      return res.status(500).json({ error })
    }
  }
}

export const tasksController = new TasksController()
