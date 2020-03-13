import React, { useState } from 'react'
import {
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Typography,
  CircularProgress,
  Grid
} from '@material-ui/core'
import useStyles from 'assets/styles/LoginForm'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import authenticateUser from 'api/user'
import { storeToken } from 'utils/sessions'

const validationForm = Yup.object({
  email: Yup.string()
    .email('Masukkan alamat email yang valid')
    .required(),
  password: Yup.string().required()
})

const LoginForm = ({ handleRedirect }) => {
  const [isLoading, setIsLoading] = useState(false)
  const classes = useStyles()

  const handleLogin = async request => {
    const { email, password } = request
    setIsLoading(true)
    const {
      data: { token }
    } = await authenticateUser(email, password)

    storeToken(token)
    handleRedirect('/dashboard')
  }

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: validationForm,
    onSubmit: data => handleLogin(data)
  })

  return (
    <>
      <Typography className={classes.title} variant="h5" gutterBottom>
        Selamat Datang di SPO 1047
      </Typography>
      <Typography variant="subtitle1">
        Silahkan masuk untuk melanjutkan
      </Typography>

      <form className={classes.form} onSubmit={formik.handleSubmit}>
        <TextField
          error={formik.touched.email && Boolean(formik.errors.email)}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Alamat Email"
          name="email"
          autoComplete="email"
          type="email"
          autoFocus
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        <TextField
          error={formik.touched.password && Boolean(formik.errors.password)}
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="password"
          label="Kata Sandi"
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Ingat Saya"
        />
        {isLoading ? (
          <Button
            fullWidth
            variant="contained"
            disabled
            className={classes.submit}
          >
            <CircularProgress size={24} color="primary" />
          </Button>
        ) : (
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Masuk
          </Button>
        )}
        <Grid container>
          <Grid item xs>
            <Link href="!#" variant="body2">
              Lupa Password?
            </Link>
          </Grid>
          <Grid item>
            <Link href="/register" variant="body2">
              Tidak punya akun? Daftar
            </Link>
          </Grid>
        </Grid>
      </form>
    </>
  )
}

export default LoginForm
