import React from 'react'

function Button ({ text, primary, handleClick }) {
  return (
    <button className={
      `button${primary ? ' button--primary' : ' button--cancel'}`}
      onClick={handleClick 
      }
    >
      {text}
    </button>
  )
}

export default Button
