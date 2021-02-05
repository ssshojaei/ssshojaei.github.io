import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import Config from '../../../config'

const Comments = ({ pageCanonicalUrl, pageId, page }) => {
  useEffect(() => {
    if (window.DISQUS) {
      window.DISQUS.reset({
        reload: true,
        config() {
          page.url = pageCanonicalUrl
          page.identifier = pageId
        },
      })
    } else {
      window.disqus_config = () => {
        page.url = pageCanonicalUrl
        page.identifier = pageId
      }
      ;(() => {
        const d = document
        const s = d.createElement('script')
        s.src = Config.disqusScript
        s.setAttribute('data-timestamp', +new Date())
        ;(d.head || d.body).appendChild(s)
      })()
    }
  }, [])

  return (
    <div>
      <div id="disqus_thread" />
    </div>
  )
}

Comments.propTypes = {
  pageCanonicalUrl: PropTypes.string.isRequired,
  pageId: PropTypes.string.isRequired,
  page: PropTypes.any,
}

export default Comments
