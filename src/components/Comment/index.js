import { Disqus } from 'gatsby-plugin-disqus'
import PropTypes from 'prop-types'
import React from 'react'

const Comments = ({ pageCanonicalUrl, title, path }) => {
  return (
    <Disqus
      config={{
        url: pageCanonicalUrl,
        identifier: path,
        title: title,
      }}
    />
  )
}

Comments.propTypes = {
  pageCanonicalUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
}

export default Comments
