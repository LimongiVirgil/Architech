import React from 'react'
import InputTextArea from '../../atoms/inputTextArea/InputTextArea'
import Label from '../../atoms/label/Label'

function InputAndLabel ({ inputType = 'text', label = '', id,  placeholder = '' }) {
  return (
    <div className="input-label">
      <Label id={id} label={label}/>
      { inputType === 'textarea' &&
        <InputTextArea id={id} placeholder={placeholder} />
      } 
    </div>
  )
}

export default InputAndLabel
