import express from 'express'
import { User } from './User.interface'

class UserController {
  private path = '/users'

  private router = express.Router()

  private users: User[] = [
    {
      firstName: 'Dwiferdio Seagal',
      lastName: 'Putra',
      email: 'member@example.com',
      password: 'password',
    },
  ]

  constructor() {
    this.initializeRoutes()
  }

  private initializeRoutes = (): void => {
    this.router.post(this.path, this.authenticateUser)
  }

  private authenticateUser = (
    request: express.Request,
    response: express.Response
  ): void => {
    const { email, password } = request.body
    const userFound = this.users.find(
      user => user.email === email && user.password === password
    )

    let responseMessage
    if (userFound) {
      responseMessage = {
        status: 'success',
      }

      response.send(responseMessage)
    } else {
      responseMessage = {
        status: 'failed',
      }
      response.status(400).send(responseMessage)
    }
  }
}

export default UserController
