import express, { Request, Response } from 'express'

import variables from './01-variables-expressions'
import functions from './02-functions'
import conditions from './03-conditions'
import arrays from './05-arrays'
import typesAndEquality from './04-types-and-equality'
import { objects } from './06-objects'
import { globals } from './07-globals'

const app = express()
const port = 3000

app.get('/basics/variables', (req: Request, res: Response) => {
  res.send(variables)
})

app.get('/basics/functions', (req: Request, res: Response) => {
  res.send(functions)
})

app.get('/basics/conditions', (req: Request, res: Response) => {
  res.send(conditions)
})

app.get('/basics/types-and-equality', (req: Request, res: Response) => {
  res.send(typesAndEquality)
})
app.get('/basics/arrays', (req: Request, res: Response) => {
  res.send(arrays)
})
app.get('/basics/objects', (req: Request, res: Response) => {
  res.send(objects)
})
app.get('/basics/globals', (req: Request, res: Response) => {
  res.send(globals)
})

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`[server]: Server is running at http://localhost:${port}`)
})
