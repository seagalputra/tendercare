import React from 'react'
import { Spin, Row, Col } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import withStyles from 'react-jss'

const styles = {
  spinner: {
    marginTop: '1rem'
  }
}

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

const Spinner = ({ classes }) => (
  <Row className={classes.spinner} type="flex" justify="center" align="middle">
    <Col>
      <Spin indicator={antIcon} />
    </Col>
  </Row>
)

export default withStyles(styles)(Spinner)
