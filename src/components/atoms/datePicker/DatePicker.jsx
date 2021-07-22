import React from 'react'

const today = new Date()
const year = today.getFullYear()
const month = today.getMonth() + 1
const day = today.getDate()
const startDate = `${year}-${month}-${day}`

function DatePicker ({id}) {
  return (
    <input type="date" id={id}
      min={startDate} 
    />
  )
}

export default DatePicker
