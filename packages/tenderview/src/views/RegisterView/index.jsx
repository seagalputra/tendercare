import React from 'react'
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Link
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(0)
    },
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
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}))

const RegisterView = () => {
  const classes = useStyles()

  return (
    <Container component="main" maxWidth="sm">
      <Box className={classes.paper}>
        <Typography className={classes.title} variant="h5" gutterBottom>
          Registrasi
        </Typography>
        <Typography variant="subtitle1">
          Silahkan isi data diri anda dengan benar
        </Typography>
        <form className={classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Nama Depan"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Nama Belakang"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Alamat email"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="caption" display="block" gutterBottom>
                Dengan mendaftar, saya setuju dengan syarat dan ketentuan yang
                berlaku.
              </Typography>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Daftar
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/" variant="body2">
                Sudah punya akun? Masuk
              </Link>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  )
}

export default RegisterView
