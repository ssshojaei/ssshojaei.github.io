import PropTypes from 'prop-types'
import React from 'react'
import style from './about.module.less'

const AboutTile = ({ img, textH4, textH3, alt, height, width }) => (
  <div className={style.aboutTile}>
    <div className={style.aboutBlock}>
      <img
        src={`../${img}`}
        height={height || 64}
        width={width || 64}
        alt={alt || ''}
      />
    </div>
    <div className={`textCenter ${style.mrTp26PX}`}>
      <h3>{textH3 || ''}</h3>
      <h4>{textH4 || ''}</h4>
    </div>
  </div>
)

AboutTile.propTypes = {
  img: PropTypes.string.isRequired,
  textH4: PropTypes.string,
  textH3: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
}

export default AboutTile
