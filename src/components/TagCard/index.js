import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Config from '../../../config'
import style from './tags.module.less'

const TagCard = ({ img, name, link, description, color }) => {
  const tagPage = Config.pages.tag

  return (
    <Link className={style.tagCard} to={`/${tagPage}/${link}`}>
      <div className={style.tagCard}>
        <div
          className={style.tagImg}
          style={{
            backgroundImage: `url(${img})`,
          }}
        />
        <div className={style.pd20px}>
          <div className="textCenter">
            <h4 style={{ color: `${color}` }}>#{name}</h4>
          </div>
          <p>{description}</p>
        </div>
      </div>
    </Link>
  )
}

TagCard.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  link: PropTypes.string,
  description: PropTypes.string,
  color: PropTypes.string,
}

export default TagCard
