import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import path from 'path'
import helmet from 'helmet'

const app: express.Application = express()
const isProd: boolean = process.env.NODE_ENV === 'production'

app.use(helmet())
app.use(cors())
app.use(bodyParser.json())

app.get('/api/foo', (request: express.Request, response: express.Response) => {
  response.json({
    foo: 'bar',
  })
})

if (isProd) {
  const buildPath = path.resolve(__dirname, '../../tenderview/build')
  const indexHtml = path.join(buildPath, 'index.html')

  app.use(express.static(buildPath))
  app.get('*', (request: express.Request, response: express.Response) => {
    response.sendFile(indexHtml)
  })
}

export default app
