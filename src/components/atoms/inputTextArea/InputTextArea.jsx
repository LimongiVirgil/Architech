import React from 'react'

function InputTextArea ({ id, placeholder = '' }) {
  return (
    <textarea id={id} placeholder={placeholder}/>
  )
}

export default InputTextArea
