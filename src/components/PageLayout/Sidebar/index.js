import { globalHistory } from '@reach/router'
import { Affix, Col, Layout, Row } from 'antd'
import PropTypes from 'prop-types'
import React from 'react'
import { useWindowSize } from '../../../utils/hooks'
import DomContent from './DomContent'
import style from './sidebar.module.less'

const { Content } = Layout

const Sidebar = ({ children }) => {
  const [width] = useWindowSize()
  const { pathname } = globalHistory.location
  let domContent = <DomContent />

  if (width > 997) {
    domContent = (
      <Affix offsetTop={0}>
        <DomContent />
      </Affix>
    )
  } else if (width < 768) {
    domContent = <></>
    if (pathname === '/') {
      domContent = <DomContent />
    }
  }

  return (
    <>
      <Layout>
        <Content className={`${style.content} ${style.background}`}>
          <Row>
            <Col sm={24} md={9} lg={6} className={style.sidebarContent}>
              {domContent}
            </Col>
            <Col sm={24} md={15} lg={18}>
              <Layout
                className={`${style.background} ${style.boxContent} borderRadiusSection`}
              >
                {children}
              </Layout>
            </Col>
          </Row>
        </Content>
      </Layout>
    </>
  )
}

Sidebar.propTypes = {
  children: PropTypes.any,
}

export default Sidebar
