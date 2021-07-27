import React from 'react'

const today = new Date()
const year = today.getFullYear()
const month = (today.getMonth() + 1).toString()
const day = (today.getDate()).toString()
const startDate = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`

function DatePicker ({ id, data, updateInput }) {

  function handleChange (event) {
    updateInput(event.target.value)
  }
  return (
    <input type="date" id={id}
      min={startDate} 
      value={data}
      onChange={handleChange}
    />
  )
}

export default DatePicker
