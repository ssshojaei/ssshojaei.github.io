import { Layout } from 'antd'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import 'prismjs/themes/prism-solarizedlight.css'
import PropTypes from 'prop-types'
import React from 'react'
import Config from '../../../config'
import Comment from '../../components/Comment'
import Header from '../../components/PageLayout/Header'
import SidebarWrapper from '../../components/PageLayout/Sidebar'
import SEO from '../../components/Seo'
import Utils from '../../utils/pageUtils'
import './highlight-syntax.less'
import style from './post.module.less'

const Post = ({
  data: {
    markdownRemark: { html, frontmatter },
  },
}) => {
  const {
    title,
    cover: {
      childImageSharp: { fluid, fixed },
    },
    excerpt,
    path,
  } = frontmatter

  const canonicalUrl = Utils.resolvePageUrl(
    Config.siteUrl,
    Config.pathPrefix,
    path
  )

  return (
    <Layout className="outerPadding">
      <Layout className="container">
        <SEO
          title={title}
          description={excerpt}
          path={path}
          keywords={Config.keywords}
          imageUrl={fluid.src}
        />
        <Header />
        <SidebarWrapper>
          <div className="marginTopTitle">
            <h1>{title}</h1>
            <div className={style.bannerImgContainer}>
              <Img
                className={style.bannerImg}
                fluid={fluid}
                title={excerpt}
                alt={title}
                fixed={fixed}
              />
            </div>
            <article
              className={style.blogArticle}
              dangerouslySetInnerHTML={{ __html: html }}
            />
            <Comment
              pageCanonicalUrl={canonicalUrl}
              title={title}
              path={path}
            />
          </div>
        </SidebarWrapper>
      </Layout>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($postPath: String!) {
    markdownRemark(frontmatter: { path: { eq: $postPath } }) {
      html
      timeToRead
      frontmatter {
        title
        date(formatString: "DD MMM YYYY")
        tags
        path
        excerpt
        cover {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
            fixed {
              src
            }
          }
        }
      }
    }
    allMarkdownRemark(
      filter: {
        frontmatter: { path: { ne: $postPath } }
        fileAbsolutePath: { regex: "/index.md$/" }
      }
    ) {
      edges {
        node {
          frontmatter {
            path
            title
            tags
            excerpt
            cover {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`

Post.propTypes = {
  data: PropTypes.any,
}

export default Post
