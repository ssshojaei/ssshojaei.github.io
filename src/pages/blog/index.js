import { Col, Layout, Row } from 'antd'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Header from '../../components/PageLayout/Header'
import SidebarWrapper from '../../components/PageLayout/Sidebar'
import PostCard from '../../components/PostCard'
import SEO from '../../components/Seo'

const Blog = ({ data }) => (
  <Layout className="outerPadding">
    <Layout className="container">
      <Header />
      <SEO
        title="بلاگ"
        description="ویدیوهای آموزشی، پادکست‌ها و نوشته‌های سید صالح شجاعی"
        path="blog"
      />
      <SidebarWrapper>
        <div className="marginTopTitle">
          <h1 className="titleSeparate">بلاگ</h1>
        </div>
        <Row gutter={[20, 20]}>
          {data.allMarkdownRemark &&
            data.allMarkdownRemark.edges.map((val, key) => (
              <Col key={key} xs={24} sm={24} md={12} lg={8}>
                <PostCard data={val} />
              </Col>
            ))}
        </Row>
      </SidebarWrapper>
    </Layout>
  </Layout>
)

Blog.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    }).isRequired,
  }).isRequired,
}

export const query = graphql`
  {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/index.md$/" } }
    ) {
      edges {
        node {
          frontmatter {
            date
            path
            title
            tags
            excerpt
            cover {
              childImageSharp {
                fluid(maxWidth: 288) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
                fixed {
                  srcWebp
                }
              }
            }
          }
        }
      }
    }
  }
`

export default Blog
