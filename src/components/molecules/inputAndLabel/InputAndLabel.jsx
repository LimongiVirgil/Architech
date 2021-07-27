import React from 'react'
import InputTextArea from '../../atoms/inputTextArea/InputTextArea'
import DatePicker from '../../atoms/datePicker/DatePicker'
import Label from '../../atoms/label/Label'
import InputText from '../../atoms/inputText/InputText'
import InputTime from '../../atoms/inputTime/inputTime'

function InputAndLabel ({ 
  data, 
  updateInput,
  inputType = 'text', 
  label = '', id,  
  placeholder = '', 
  className, 
  fullWidth }) {
  return (
    <div className={`input-label${fullWidth ? '' : ' input-label--unstretched'}${className ? ' ' + className : ''}`}>
      <Label id={id} label={label}/>
      { inputType === 'textarea' &&
        <InputTextArea id={id} placeholder={placeholder} data={data} updateInput={updateInput}/>
      } 
      { inputType === 'text' &&
        <InputText id={id} placeholder={placeholder} />
      } 
      { inputType === 'date' &&
        <DatePicker id={id} data={data} updateInput={updateInput} />
      } 
      { inputType === 'time' &&
        <InputTime id={id} data={data} updateInput={updateInput} />
      } 
    </div>
  )
}

export default InputAndLabel
