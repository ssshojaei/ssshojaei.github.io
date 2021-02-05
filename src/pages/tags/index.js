import { Col, Layout, Row } from 'antd'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Config from '../../../config'
import Header from '../../components/PageLayout/Header'
import SidebarWrapper from '../../components/PageLayout/Sidebar'
import SEO from '../../components/Seo'
import TagCard from '../../components/TagCard'

const Tags = ({
  data: {
    allFile: { edges },
  },
}) => {
  const tagData = Config.tags

  return (
    <Layout className="outerPadding">
      <Layout className="container">
        <Header />
        <SEO
          title="دسته‌ها"
          description="دسته‌بندی های بلاگ سید صالح شجاعی"
          path="tags"
        />
        <SidebarWrapper>
          <>
            <div className="marginTopTitle">
              <h1 className="titleSeparate">#دسته‌ها</h1>
            </div>
            <Row gutter={[30, 20]}>
              {edges.map(val => (
                <Col key={val.node.name} xs={24} sm={24} md={12} lg={8}>
                  <TagCard
                    img={val.node.childImageSharp.fluid.src}
                    link={val.node.name}
                    name={tagData[val.node.name].name}
                    description={tagData[val.node.name]?.description}
                    color={tagData[val.node.name]?.color}
                  />
                </Col>
              ))}
            </Row>
          </>
        </SidebarWrapper>
      </Layout>
    </Layout>
  )
}

Tags.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              tags: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
            }).isRequired,
          }).isRequired,
        }).isRequired
      ).isRequired,
    }).isRequired,
    allFile: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            name: PropTypes.string.isRequired,
            childImageSharp: PropTypes.shape({
              fluid: PropTypes.object.isRequired,
            }).isRequired,
          }).isRequired,
        }).isRequired
      ).isRequired,
    }).isRequired,
  }).isRequired,
}

export const query = graphql`
  {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/index.md$/" } }) {
      edges {
        node {
          frontmatter {
            tags
          }
        }
      }
    }
    allFile(filter: { relativeDirectory: { eq: "tags" } }) {
      edges {
        node {
          name
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default Tags
