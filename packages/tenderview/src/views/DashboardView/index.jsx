import React from 'react'
import { Container, Grid, Card, CardHeader, Avatar } from '@material-ui/core'

import ProductCard from 'components/common/ProductCard'

import dashboardImage from 'assets/img/dashboard.svg'

import useStyles from 'assets/styles/DashboardView'

const DashboardView = () => {
  const classes = useStyles()

  return (
    <Container component="main" className={classes.root} maxWidth="sm">
      <Grid container justify="flex-end">
        <img
          className={classes.dashboardImage}
          src={dashboardImage}
          alt="Dashboard"
        />
      </Grid>
      <Grid item>
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
        </Card>
      </Grid>
      <Grid container className={classes.productList} spacing={2}>
        <Grid item xs={6}>
          <ProductCard />
        </Grid>
        <Grid item xs={6}>
          <ProductCard />
        </Grid>
      </Grid>
    </Container>
  )
}

export default DashboardView
