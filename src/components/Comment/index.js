import { Disqus } from 'gatsby-plugin-disqus'
import PropTypes from 'prop-types'
import React from 'react'

const Comments = ({ pageCanonicalUrl, pageId, page }) => {
  return (
    <Disqus
      config={{
        url: pageCanonicalUrl,
        identifier: pageId,
        title: page,
      }}
    />
  )
}

Comments.propTypes = {
  pageCanonicalUrl: PropTypes.string.isRequired,
  pageId: PropTypes.string.isRequired,
  page: PropTypes.any,
}

export default Comments
