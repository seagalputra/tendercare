import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import helmet from 'helmet'

const app: express.Application = express()

app.use(cors())
app.use(helmet())
app.use(bodyParser.json())

app.get('/', (request: express.Request, respone: express.Response) => {
  respone.json({
    foo: 'bar',
  })
})

export default app
