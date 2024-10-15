import express, { type Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import { DataSource } from 'typeorm'
import cors from 'cors'
import bodyParser from 'body-parser'

import { Task } from './tasks/task.entity.ts'

dotenv.config()

// Instantiate express app
const app: Express = express()

app.use(bodyParser.json()) // incoming json object in body request will be converted into javascript object

app.use(cors()) // no cors

// Create DB Connection
export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.MYSQL_HOST,
  port: Number(process.env.MYSQL_PORT),
  username: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  entities: [Task],
  synchronize: true
})

app.get('/', (req: Request, res: Response) => {
  res.send('Index Router: Hello via Bun!')
})

// Define sever port
const port = process.env.PORT || 5002

// Initial database (Data Source)
AppDataSource.initialize()
  .then(() => {
    // Start listening to the requests on the defined port
    app.listen(port)
    console.log(`Data Source has been initialized successfully!\nYour application is running at localhost:${port}`)
  })
  .catch((err) => {
    console.error(`An error occurred during Data Source initialization:: ${err}`)
  })
