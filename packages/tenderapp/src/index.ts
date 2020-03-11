import App from './app'
import UserController from './User/User.controller'

const port: number | string = process.env.PORT || 5000
const app = new App([new UserController()], port)

app.listen()
