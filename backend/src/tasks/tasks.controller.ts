import { Request, Response } from 'express'
import { instanceToPlain, plainToInstance } from 'class-transformer'
import { dataSource } from '../index'
import { Task } from './task.entity'
import { validationResult } from 'express-validator'
import { UpdateResult } from 'typeorm'

// Before:      async func(): Promise<Response> { return res.status(200).json() }
// After:       async func(): Promise<void> { res.status(200).json() }
// Better fix:  extend Request interface (https://www.reddit.com/r/node/comments/nin8fs/help_node_express_typescript_how_should_i_type_a/)
class TasksController {
  async getAll(req: Request, res: Response): Promise<void> {
    let allTasks: Task[]
    try {
      allTasks = await dataSource.getRepository(Task).find({
        order: {
          date: 'ASC'
        }
      })
      allTasks = instanceToPlain(allTasks) as Task[]
      res.status(200).json({ data: allTasks })
    } catch (error) {
      console.error(`An error occurred in TaskController.getAll:: ${error}`)
      res.status(500).json({ error: error })
    }
  }

  async create(req: Request, res: Response): Promise<void> {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      res.status(400).json({ error: errors.array() })
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
      res.status(201).json({ data: createdTask })
    } catch (error) {
      console.error(`An error occurred in TaskController.create:: ${error}`)
      res.status(500).json({ error: error })
    }
  }

  async updateStatus(req: Request, res: Response): Promise<void> {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      res.status(400).json({ error: errors.array() })
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
      res.status(500).json({ error: error })
    }

    if (!task) {
      res.status(404).json({ error: 'Task does not exist' })
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
      res.status(200).json({ data: updatedTask })
    } catch (error) {
      console.error(`An error occurred in TaskController.updateStatus:: ${error}`)
      res.status(500).json({ error: error })
    }
  }
}

export const tasksController = new TasksController()
