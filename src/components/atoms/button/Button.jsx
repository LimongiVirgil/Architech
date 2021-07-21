import React from 'react'

function Button ({ text, primary }) {
  return (
    <button className={`button${primary ? ' button--primary' : ''}`}>
      {text}
    </button>
  )
}

export default Button