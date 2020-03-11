import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
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
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  image: {
    width: '78%',
    margin: 'auto'
  }
}))

export default useStyles
