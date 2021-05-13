import { Layout } from 'antd'
import React from 'react'
import AboutMe from '../components/PageFragments/HomePage/AboutMe'
import Quotes from '../components/PageFragments/HomePage/Quotes'
import Header from '../components/PageLayout/Header'
import SidebarWrapper from '../components/PageLayout/Sidebar'

const HomePage = () => (
  <Layout className="outerPadding">
    <Layout className="container">
      <Header />
      <SidebarWrapper>
        <Quotes />
        <AboutMe />
      </SidebarWrapper>
    </Layout>
  </Layout>
)

export default HomePage
