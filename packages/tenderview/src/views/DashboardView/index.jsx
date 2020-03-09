import React from 'react';
import { Layout, Menu, Button } from 'antd';

const DashboardView = () => {
  const { Header, Footer, Content } = Layout;

  return (
    <Layout
      className="layout"
      style={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}
    >
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div
          style={{
            width: '120px',
            height: '31px',
            background: 'rgba(255, 255, 255, 0.2)',
            margin: '16px 24px 16px 0',
            float: 'left',
          }}
        />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">Nav 1</Menu.Item>
          <Menu.Item key="2">Nav 2</Menu.Item>
          <Menu.Item key="3">Nav 3</Menu.Item>
        </Menu>
      </Header>
      <Content
        style={{
          padding: '0 50px',
          marginTop: 64,
          flex: 1,
        }}
      >
        <div
          style={{
            margin: '32px 0',
            padding: 24,
            minHeight: 380,
            background: '#fff',
          }}
        >
          <Button type="primary">Click Me!</Button>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Footer</Footer>
    </Layout>
  );
};

export default DashboardView;
