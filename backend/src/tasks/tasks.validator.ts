import { body } from 'express-validator'
import { Priority } from '../enums/Priority'
import { Status } from '../enums/Status'

export const createValidator = [
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
    .withMessage('Status must be Todo, In Progress or Completed')
]
