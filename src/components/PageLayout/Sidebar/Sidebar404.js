import { Col, Layout, Row } from 'antd'
import PropTypes from 'prop-types'
import React from 'react'
import style from './sidebar.module.less'

const { Content } = Layout

const Sidebar404 = ({ children }) => (
  <Layout>
    <Content className={`${style.content} ${style.background} `}>
      <Row>
        <Col sm={24} md={24} lg={24}>
          <Layout
            className={`${style.background} ${style.boxContent} ${style.sideBar404Radius}`}
          >
            {children}
          </Layout>
        </Col>
      </Row>
    </Content>
  </Layout>
)

Sidebar404.propTypes = {
  children: PropTypes.any,
}

export default Sidebar404
