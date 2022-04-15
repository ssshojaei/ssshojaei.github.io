import { Link } from 'gatsby'
import moment from 'moment'
import PropTypes from 'prop-types'
import React from 'react'
import style from './postCard.module.less'

const PostCard = ({
  data: {
    node: { frontmatter },
  },
}) => {
  return (
    <div className={style.postCard}>
      <Link to={`/${frontmatter.path}`}>
        <div
          className={style.postCardImg}
          style={{
            backgroundImage: `url(${frontmatter?.cover?.childImageSharp?.fixed?.srcWebp})`,
          }}
        />
        <div className={style.mrTp20}>
          <p>
            <span className={style.dateHolder}>
              {frontmatter ? moment(frontmatter.date).format('YYYY-MM-DD') : ''}
            </span>
          </p>
          <h3>{frontmatter ? frontmatter.title : ''}</h3>
          <p>{frontmatter ? frontmatter.excerpt : ''}</p>
          <p
            style={{
              color: '#ce6d96',
              wordSpacing: '10px',
              direction: 'ltr !important',
            }}
          >
            {`#${frontmatter.tags.join(' #')}`}
          </p>
        </div>
      </Link>
    </div>
  )
}

PostCard.propTypes = {
  data: PropTypes.object,
}

export default PostCard
