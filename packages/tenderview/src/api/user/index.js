import crypto from 'crypto'

const authenticateUser = (email, password) => {
  return new Promise(resolve => {
    setTimeout(() => {
      const token = crypto
        .createHash('sha256')
        .update(`${email}-${password}`)
        .digest('base64')

      resolve({
        code: 200,
        status: 'success',
        data: {
          token
        }
      })
    }, 2000)
  })
}

export default authenticateUser
