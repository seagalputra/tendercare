import React from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, Layout } from 'antd'
import withStyles from 'react-jss'

const styles = {
  header: {
    position: 'fixed',
    zIndex: 1,
    width: '100%',
    backgroundColor: '#fff'
  },
  menu: {
    lineHeight: '64px'
  },
  logo: {
    width: '120px',
    height: '31px',
    background: '#f0f2f5',
    margin: '16px 24px 16px 0',
    float: 'left'
  }
}

const NavigationBar = ({ classes }) => {
  const { Header } = Layout

  return (
    <Header className={classes.header}>
      <div className={classes.logo} />
      <Menu
        className={classes.menu}
        mode="horizontal"
        defaultSelectedKeys={['1']}
      >
        <Menu.Item key="1">
          <NavLink to="/">Beranda</NavLink>
        </Menu.Item>
        <Menu.Item key="2">
          <NavLink to="/login">Ambil Barang</NavLink>
        </Menu.Item>
        <Menu.Item key="3">
          <NavLink to="/">Lihat Barang</NavLink>
        </Menu.Item>
      </Menu>
    </Header>
  )
}

export default withStyles(styles)(NavigationBar)
