import React from 'react'

import '../styles/Button.scss'

const Button = ({ label, isDisabled, onClick }) => {
  return (
    <div
      className={`button ${isDisabled ? 'disabled' : ''}`}
      onClick={() => {
        onClick()
      }}
    >
      <span className="label">{label}</span>
    </div>
  )
}

export default Button
