import React from 'react'

function ActionButton({text, icon, className}) {
  return (
    <button className={`action-button${className ? ' ' + className : ''}`}>
      {text}
      {icon && <img className="action-button__icon" src={icon}/>}
    </button>
  )
}

export default ActionButton
