import { Router, Request, Response } from 'express'
import { tasksController } from './tasks.controller'

export const tasksRouter: Router = Router()

tasksRouter.get('/tasks', async (req: Request, res: Response) => {
  const tasks = await tasksController.getAll(req, res)
  res.status(200).send(tasks)
})
