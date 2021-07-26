import React from 'react'

function InputTime ({ id, data, updateInput }) {
  function handleChange (event) {
    updateInput(event.target.value)
  }
  
  return (
    <input type="time" 
      id={id} 
      name="appt-time" 
      value={data} 
      onChange={handleChange}
    />
  )
}

export default InputTime
