import React from 'react'

function InputTime ({ id }) {
  return (
    <input type="time" id={id} value="10:30" name="appt-time" />
  )
}

export default InputTime
