import { Router } from 'express'
import { tasksController } from './tasks.controller'
import { createTaskValidator, updateTaskStatusValidator } from './tasks.validator'

export const tasksRouter: Router = Router()

tasksRouter.get('/tasks', tasksController.getAll)

tasksRouter.post('/tasks', createTaskValidator, tasksController.create)

tasksRouter.patch('/tasks', updateTaskStatusValidator, tasksController.updateStatus)
