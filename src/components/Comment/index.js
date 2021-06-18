import { Divider, Tag } from 'antd'
import { Disqus } from 'gatsby-plugin-disqus'
import PropTypes from 'prop-types'
import React from 'react'

const Comments = ({ title, path }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <Divider plain>دیدگاه‌ها</Divider>
      <Tag color="blue" style={{ marginBottom: 20 }}>
        انگار برای خوندن و ارسال دیدگاه باید موقتاً ایران نباشید 💔
      </Tag>
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
