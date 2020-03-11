import axios from 'axios'

const userLogin = async (email, password) => {
  try {
    const response = await axios.post('/v1/user/login', {
      email,
      password
    })

    return response.data.data
  } catch (error) {
    throw new Error(error)
  }
}

export default userLogin
