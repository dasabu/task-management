import express, { type Express, Request, Response } from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app: Express = express()

const port = process.env.PORT || 5002

app.get('/', (req: Request, res: Response) => {
  res.send('Hello via Bun')
})

app.listen(port)
