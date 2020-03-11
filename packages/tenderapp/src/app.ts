import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import helmet from 'helmet'

class App {
  private app: express.Application

  private port: number | string

  constructor(controllers: Array<any>, port: number | string) {
    this.app = express()
    this.port = port

    this.initializeMiddlewares()
    this.initializeControllers(controllers)
  }

  private initializeMiddlewares(): void {
    this.app.use(helmet())
    this.app.use(cors())
    this.app.use(bodyParser.json())
  }

  private initializeControllers(controllers: Array<any>): void {
    controllers.forEach((controller: any) => {
      this.app.use('/v1/api', controller.router)
    })
  }

  public listen(): void {
    this.app.listen(this.port)
  }
}

export default App
