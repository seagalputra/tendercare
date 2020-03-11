import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'

const ProductCard = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </Card>
  )
}

export default ProductCard
