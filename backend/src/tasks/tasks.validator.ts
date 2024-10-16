import { body, ValidationChain } from 'express-validator'
import { Priority } from '../enums/Priority'
import { Status } from '../enums/Status'

export const createTaskValidator: ValidationChain[] = [
  body('title')
    .not()
    .isEmpty()
    .withMessage('Title is mandatory')
    .trim()
    .isString()
    .withMessage('Title must be in string format'),
  body('date').not().isEmpty().withMessage('Date is mandatory').isString().withMessage('Invalid date format'),
  body('description').trim().isString().withMessage('Description must be in string format'),
  body('priority')
    .trim()
    .isIn([Priority.Normal, Priority.High, Priority.Low])
    .withMessage('Priority must be High, Normal or Low'),
  body('status')
    .trim()
    .isIn([Status.Completed, Status.InProgress, Status.Todo])
    .withMessage('Status must be Todo, InProgress or Completed')
]

export const updateTaskStatusValidator: ValidationChain[] = [
  body('id')
    .not()
    .isEmpty()
    .withMessage('ID must be included')
    .trim()
    .isString()
    .withMessage('ID must be in UUID format'),
  body('status')
    .trim()
    .isIn([Status.Todo, Status.InProgress, Status.Completed])
    .withMessage('Status must be Todo, InProgress or Completed')
]
