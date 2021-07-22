import React from 'react'
import InputTextArea from '../../atoms/inputTextArea/InputTextArea'
import DatePicker from '../../atoms/datePicker/DatePicker'
import Label from '../../atoms/label/Label'
import InputText from '../../atoms/inputText/InputText'

function InputAndLabel ({ 
  inputType = 'text', 
  label = '', id,  
  placeholder = '', 
  className, 
  fullWidth }) {
  return (
    <div className={`input-label${fullWidth ? '' : ' input-label--unstretched'}${className ? ' ' + className : ''}`}>
      <Label id={id} label={label}/>
      { inputType === 'textarea' &&
        <InputTextArea id={id} placeholder={placeholder} />
      } 
      { inputType === 'text' &&
        <InputText id={id} placeholder={placeholder} />
      } 
      { inputType === 'date' &&
        <DatePicker id={id} />
      } 
    </div>
  )
}

export default InputAndLabel
