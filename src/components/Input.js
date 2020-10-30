import React, { useState } from 'react'

import '../styles/Input.scss'

const Input = ({ id, label, style, maxLength, invalidMsg, placeholder, onValueChange }) => {
  const [value, setValue] = useState('')
  const [invalidMsgState, setInvalidMsgState] = useState(invalidMsg)

  return (
    <div className="input" style={style}>
      <label className="label" htmlFor={id}>
        {label}
      </label>

      <input
        id={id}
        value={value}
        maxLength={maxLength}
        placeholder={placeholder}
        className={`field ${!!invalidMsgState ? 'invalid' : ''}`}
        onClick={() => {
          setInvalidMsgState('')
        }}
        onFocus={() => {
          setInvalidMsgState('')
        }}
        onChange={(event) => {
          setValue(event.target.value)
          onValueChange(value)
        }}
      />

      <span className={`invalid-msg ${!!invalidMsgState ? 'visible' : ''}`}>{invalidMsgState}</span>
    </div>
  )
}

export default Input
