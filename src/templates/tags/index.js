import { Col, Layout, Row } from 'antd'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import React from 'react'
import Config from '../../../config'
import Header from '../../components/PageLayout/Header'
import SidebarWrapper from '../../components/PageLayout/Sidebar'
import PostCard from '../../components/PostCard'
import SEO from '../../components/Seo'
import Utils from '../../utils/pageUtils'
import style from './tags.module.less'

const TagPage = ({ data, pageContext }) => {
  const { tag } = pageContext
  const tagName = Config.tags[tag].name || Utils.capitalize(tag)
  const tagPagePath = Config.pages.tag
  const { fixed, fluid } = data.allFile.edges.find(
    edge => edge.node.name === tag
  ).node.childImageSharp
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout className="outerPadding">
      <Layout className="container">
        <Header />
        <SEO
          title={tagName}
          description={`تمام پست‌های ${tagName}. ${Config.tags[tag].description} `}
          path={`/${tagPagePath}/${tag}`}
          keywords={[tagName]}
        />
        <SidebarWrapper>
          <div className={`marginTopTitle ${style.tagsList}`}>
            <h1>#{tagName}</h1>
            <div className={style.bannerImgContainer}>
              <Img
                className={style.bannerImg}
                fluid={fluid}
                fixed={fixed}
                alt={tagName}
              />
            </div>
            <h4 className="textCenter">{Config.tags[tag].description}</h4>
          </div>
          <Row gutter={[20, 20]}>
            {posts.map((post, key) => (
              // eslint-disable-next-line react/no-array-index-key
              <Col key={key} xs={24} sm={24} md={12} lg={8}>
                <PostCard data={post} />
              </Col>
            ))}
          </Row>
        </SidebarWrapper>
      </Layout>
    </Layout>
  )
}

TagPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.object).isRequired,
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
        })
      ).isRequired,
    }).isRequired,
  }).isRequired,
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }).isRequired,
}

export const pageQuery = graphql`
  query($tag: String!) {
    allMarkdownRemark(
      filter: {
        frontmatter: { tags: { in: [$tag] } }
        fileAbsolutePath: { regex: "/index.md$/" }
      }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            tags
            excerpt
            cover {
              childImageSharp {
                fluid(maxWidth: 600) {
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
    allFile(filter: { name: { eq: $tag }, dir: { regex: "/tags$/" } }) {
      edges {
        node {
          name
          childImageSharp {
            fluid(maxHeight: 600) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default TagPage
