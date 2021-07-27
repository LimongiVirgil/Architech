import React from 'react'

function InputTextArea ({ id, placeholder = '', data, updateInput }) {
  function handleChange (event) {
    updateInput(event.target.value)
  }

  return (
    <textarea 
      id={id} 
      placeholder={placeholder}
      value={data} 
      onChange={handleChange}
    />
  )
}

export default InputTextArea
