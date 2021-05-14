import { Disqus } from 'gatsby-plugin-disqus'
import PropTypes from 'prop-types'
import React from 'react'

const Comments = ({ title, path }) => {
  return (
    <div>
      <Disqus
        config={{
          url: path,
          identifier: path,
          title: title,
        }}
      />
    </div>
  )
}

Comments.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
}

export default Comments
