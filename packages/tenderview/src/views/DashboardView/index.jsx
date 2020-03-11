import React from 'react'
import {
  Container,
  Grid,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Avatar,
  Typography,
  Button
} from '@material-ui/core'

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
          <CardActions className={classes.cardActions}>
            <Button variant="contained" color="primary" disableElevation>
              Ambil Barang
            </Button>
            <Button color="primary">Lihat Barang</Button>
          </CardActions>
        </Card>
      </Grid>
    </Container>
  )
}

export default DashboardView
