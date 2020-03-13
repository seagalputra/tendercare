import React from 'react'
import {
  Card,
  CardContent,
  CardActionArea,
  CardActions,
  Typography,
  Button
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Skeleton } from '@material-ui/lab'

const useStyles = makeStyles(() => ({
  media: {
    height: 200
  }
}))

const ProductCard = () => {
  const classes = useStyles()

  return (
    <Card>
      <CardActionArea>
        <Skeleton animation="false" variant="rect" className={classes.media} />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Ambil Barang
        </Button>
      </CardActions>
    </Card>
  )
}

export default ProductCard
