import React, { useState } from 'react'
import {
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Typography,
  Container,
  Paper,
  Snackbar
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(6)
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold'
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}))

const LoginView = () => {
  const [isAlertOpen, setIsAlertOpen] = useState(false)
  const classes = useStyles()

  const handleAlertOpen = () => {
    setIsAlertOpen(true)
  }

  const handleAlertClose = (event, reason) => {
    if (reason === 'clickaway') return

    setIsAlertOpen(false)
  }

  const validationForm = Yup.object({
    email: Yup.string()
      .email('Masukkan alamat email yang valid')
      .required(),
    password: Yup.string().required()
  })

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: validationForm,
    onSubmit: () => handleAlertOpen()
  })

  return (
    <Container component="main" maxWidth="sm">
      <Paper className={classes.paper}>
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
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Masuk
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Lupa Password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {'Tidak punya akun? Daftar'}
              </Link>
            </Grid>
          </Grid>
        </form>
      </Paper>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        autoHideDuration={6000}
        open={isAlertOpen}
        message="Login Successfully"
        onClose={handleAlertClose}
      />
    </Container>
  )
}

export default LoginView
