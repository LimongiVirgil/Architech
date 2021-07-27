import React from 'react'

function Button ({ text, primary, disable, handleClick }) {
  return (
    <button className={
      `button${primary ? ' button--primary' : ' button--cancel'}`}
      onClick={handleClick} 
      disabled={disable}
    >
      {text}
    </button>
  )
}

export default Button
