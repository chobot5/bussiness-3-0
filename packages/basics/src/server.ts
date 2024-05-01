import express, { Request, Response } from 'express'
import renderJson from './main'

const app = express()
const port = 3000

app.get('/', (req: Request, res: Response) => {
  res.send(renderJson())
})

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`[server]: Server is running at http://localhost:${port}`)
})
