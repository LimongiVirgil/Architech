import React from 'react'

function InputTime ({ id, placeholder }) {
  return (
    <input type="time" id={id} placeholder={placeholder} name="appt-time" />
  )
}

export default InputTime
