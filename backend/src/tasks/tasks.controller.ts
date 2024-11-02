import { Request, Response } from 'express'
import { instanceToPlain, plainToInstance } from 'class-transformer'
import { dataSource } from '../index'
import { Task } from './task.entity'
import { validationResult } from 'express-validator'
import { UpdateResult } from 'typeorm'

class TasksController {
  async getAll(req: Request, res: Response): Promise<Response> {
    let allTasks: Task[]
    try {
      allTasks = await dataSource.getRepository(Task).find({
        order: {
          date: 'ASC'
        }
      })
      allTasks = instanceToPlain(allTasks) as Task[]
      return res.status(200).json({ data: allTasks })
    } catch (error) {
      console.error(`An error occurred in TaskController.getAll:: ${error}`)
      return res.status(500).json({ error: error })
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

    let createdTask: Task
    try {
      createdTask = await dataSource.getRepository(Task).save(newTask)
      createdTask = instanceToPlain(createdTask) as Task
      return res.status(201).json({ data: createdTask })
    } catch (error) {
      console.error(`An error occurred in TaskController.create:: ${error}`)
      return res.status(500).json({ error: error })
    }
  }

  async updateStatus(req: Request, res: Response): Promise<Response> {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array() })
    }

    let task
    try {
      task = await dataSource.getRepository(Task).findOne({
        where: {
          id: req.body.id
        }
      })
    } catch (error) {
      console.error(`An error occurred in TaskController.updateStatus:: ${error}`)
      return res.status(500).json({ error: error })
    }

    if (!task) {
      return res.status(404).json({ error: 'Task does not exist' })
    }

    let updatedTask: UpdateResult

    try {
      updatedTask = await dataSource.getRepository(Task).update(
        req.body.id,
        plainToInstance(Task, {
          status: req.body.status
        })
      )

      updatedTask = instanceToPlain(updatedTask) as UpdateResult
      return res.status(200).json({ data: updatedTask })
    } catch (error) {
      console.error(`An error occurred in TaskController.updateStatus:: ${error}`)
      return res.status(500).json({ error: error })
    }
  }
}

export const tasksController = new TasksController()
