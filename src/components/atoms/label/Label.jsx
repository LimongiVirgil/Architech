import React from 'react'

function Label ({ label = '', id }) {
  return (
    <label htmlFor={id}>{label}</label>
  )
}

export default Label
