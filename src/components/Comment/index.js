import { DiscussionEmbed } from 'disqus-react'
import PropTypes from 'prop-types'
import React from 'react'

const Comments = ({ title, path }) => {
  const disqusConfig = {
    shortname: process.env.GATSBY_DISQUS_NAME,
    config: { identifier: path, title },
  }
  return <DiscussionEmbed {...disqusConfig} />
}

Comments.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
}

export default Comments
