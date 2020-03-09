import React from 'react';
import { Spin, Row, Col } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const Spinner = () => (
  <Row type="flex" justify="center" align="middle">
    <Col>
      <Spin indicator={antIcon} />
    </Col>
  </Row>
);

export default Spinner;
