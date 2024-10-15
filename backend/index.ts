import express, { type Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import { DataSource } from 'typeorm' // create connection to DB

dotenv.config()

const app: Express = express()

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: process.env.MYSQL_HOST,
  port: Number(process.env.MYSQL_PORT),
  username: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  synchronize: true
})

app.get('/', (req: Request, res: Response) => {
  res.send('Hello via Bun')
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
