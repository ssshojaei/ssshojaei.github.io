import { Progress } from 'antd'
import PropTypes from 'prop-types'
import React from 'react'

const ProgressBar = ({ text = '', percent = 0 }) => {
  return (
    <div style={{ marginTop: '20px' }}>
      <div>
        <Progress percent={percent} strokeWidth={22} status="active" />
      </div>
      <div
        style={{
          position: 'absolute',
          marginTop: '-22px',
          marginLeft: '15px',
          color: 'white',
          fontSize: '13px',
        }}
      >
        <span>{text}</span>
      </div>
    </div>
  )
}

ProgressBar.propTypes = {
  text: PropTypes.string,
  percent: PropTypes.number,
}

export default ProgressBar
