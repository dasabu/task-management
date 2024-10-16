import { Router } from 'express'
import { tasksController } from './tasks.controller'
import { createTaskValidator } from './tasks.validator'

export const tasksRouter: Router = Router()

tasksRouter.get('/tasks', tasksController.getAll)

tasksRouter.post('/tasks', createTaskValidator, tasksController.create)
