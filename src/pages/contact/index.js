import { Col, Layout, Row } from 'antd'
import React from 'react'
import ContactForm from '../../components/PageFragments/ContactForm'
import Header from '../../components/PageLayout/Header'
import SidebarWrapper from '../../components/PageLayout/Sidebar'
import SEO from '../../components/Seo'

const Contact = () => (
  <Layout className="outerPadding">
    <Layout className="container">
      <SEO
        title="ارتباط با من"
        description="سید صالح شجاعی هستم، توسعه دهنده‌ی ارشد فرانت‌اند، مدیر ارشد فنی و چیزهایی از این دست"
        path="/contact"
        keywords={[
          'سید صالح شجاعی',
          'front-end',
          'CTO',
          'project manager',
          'javascript',
          'برنامه نویس',
        ]}
      />
      <Header />
      <SidebarWrapper>
        <div className="marginTopTitle">
          <h1 className="titleSeparate">ارتباط با من</h1>
        </div>
        <Row>
          <Col>
            <p style={{ marginBottom: 40 }}>
              به راستی که ارتباط توی{' '}
              <a
                href="https://t.me/ordinarySaleh"
                target="_blank"
                rel="noreferrer"
              >
                تلگرام
              </a>{' '}
              و <a href="mailto:ordinarySaleh@pm.me">ایمیل</a> بهتر خواهد بود
              اما اگر به رسمی بودن شرایط اهمیت میدید، شاد باش میگم! این فرم برای
              همین اینجاست
            </p>
          </Col>
        </Row>
        <Row gutter={[40, 20]}>
          <Col sm={24} md={24} lg={12}>
            <img
              src="../../contact.png"
              alt="contact"
              className="widthFull contactImgBorder"
            />
          </Col>
          <ContactForm />
        </Row>
      </SidebarWrapper>
    </Layout>
  </Layout>
)

export default Contact
