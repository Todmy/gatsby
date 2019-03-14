import React from 'react'

const checkmarkStyle = {
  width: "16px",
  height: "8px",
  transform: "rotate(-45deg) translateY(6px)"
}

const Checkmark = ({ className }) => <div className={className} style={checkmarkStyle}></div>

export default Checkmark