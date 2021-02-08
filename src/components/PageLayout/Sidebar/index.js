import { globalHistory } from '@reach/router'
import { Affix, Col, Layout, Row } from 'antd'
import FeatherIcon from 'feather-icons-react'
import PropTypes from 'prop-types'
import React from 'react'
import FA from 'react-fontawesome'
import Config from '../../../../config'
import { useWindowSize } from '../../../utils/hooks'
import style from './sidebar.module.less'

const { Content } = Layout
const { telegram, github, instagram, twitter } = Config.social

const DomContent = () => (
  <aside>
    <div className={style.profileAvatar} />
    <div className={`${style.name} centerAlign`}>
      <div className={`${style.boxName} centerAlign`}>
        <h2>
          سید <span>صالح شجاعی</span>
        </h2>
      </div>
      <div className={`${style.badge} ${style.badgeGray}`}>
        Senior Front-end Developer
      </div>
      <div className="centerAlign box">
        <a
          href={telegram}
          target="_blank"
          label="button"
          rel="noopener noreferrer"
        >
          <FA name="telegram" />
        </a>
        <a
          href={twitter}
          target="_blank"
          label="button"
          rel="noopener noreferrer"
        >
          <FA name="twitter" />
        </a>
        <a
          href={github}
          target="_blank"
          label="button"
          rel="noopener noreferrer"
        >
          <FA name="github" />
        </a>
        <a
          href={instagram}
          target="_blank"
          label="button"
          rel="noopener noreferrer"
        >
          <FA name="instagram" />
        </a>
      </div>
      <ul className={`box ${style.badge} contactBlock`}>
        <li className={`${style.contactBlockItem}`}>
          <span>
            <FeatherIcon size="19" icon="calendar" />{' '}
          </span>
          &nbsp; &nbsp; بهمن ۱۳۷۸
        </li>
        <li className={`${style.contactBlockItem}`}>
          <span>
            <FeatherIcon size="19" icon="map-pin" />
          </span>{' '}
          &nbsp; &nbsp; شیراز، ایران
        </li>
        <li className={`${style.contactBlockItem}`}>
          <span>
            <FeatherIcon size="19" icon="mail" />
          </span>{' '}
          &nbsp; &nbsp;
          <a href="mailto:ordinarySaleh@pm.me" target="_top">
            <span className={style.emailHider}>@</span>
          </a>
        </li>
      </ul>
      <div className={style.resumeDownload}>
        <a href="../resume.pdf" download target="_blank">
          دریافت رزومه
        </a>
      </div>
    </div>
  </aside>
)

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
  }
  if (width < 768) {
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

export const Sidebar404 = ({ children }) => (
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

Sidebar.propTypes = {
  children: PropTypes.any,
}

Sidebar404.propTypes = {
  children: PropTypes.any,
}

export default Sidebar
