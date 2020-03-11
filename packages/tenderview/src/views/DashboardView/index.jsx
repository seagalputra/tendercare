import React from 'react'
import {
  Container,
  Grid,
  Card,
  CardHeader,
  CardContent,
  Avatar,
  Typography
} from '@material-ui/core'

import ProductCard from 'components/common/ProductCard'

import useStyles from 'assets/styles/DashboardView'

const DashboardView = () => {
  const classes = useStyles()

  return (
    <Container component="main" className={classes.root} maxWidth="sm">
      <Grid>
        <Card>
          <CardHeader
            avatar={
              <Avatar aria-label="profile" className={classes.avatar}>
                DP
              </Avatar>
            }
            title="Dwiferdio Seagal Putra"
            subheader="member@tendercare.com"
          />
          <CardContent>
            <Typography variant="h5" className={classes.title}>
              This is DashboardView
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid className={classes.productList}>
        <ProductCard />
      </Grid>
    </Container>
  )
}

export default DashboardView
