import { makeStyles } from '@material-ui/core/styles'
import { deepPurple } from '@material-ui/core/colors'

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(3)
  },
  title: {
    textAlign: 'center'
  },
  avatar: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500]
  },
  cardActions: {
    justifyContent: 'center',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)
  },
  productList: {
    marginTop: theme.spacing(2)
  }
}))

export default useStyles
