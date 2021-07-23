import React from 'react'
import Button from '../../atoms/button/Button'
import InputAndLabel from '../../molecules/inputAndLabel/InputAndLabel'
import Title from '../../atoms/title/title'
import FormRecap from '../../molecules/formRecap/FormRecap'

function NewInterventionForm ({cancelCallback, validateCallback, callBackDataCompany}) {

  function handleCancel () {
    cancelCallback(false)
  }

  function handleValidate () {
    validateCallback(false)
  }

  return (
    <div className="new-intervention-form">
      <Title cssClass="card-title">Programmer une intervention</Title>

      <div className="new-intervention-form__fields form-fields">
        <div className="form-fields__inputs">
          <div className="form-fields__container">
            <InputAndLabel inputType="date" label="Date" id="date-intervention" />
            <InputAndLabel inputType="time" label="Heure" id="heure-intervention" />
          </div>
          <InputAndLabel fullWidth={true} inputType="textarea" label="Commentaire (facultatif)" id="commentaire" placeholder="Votre commentaire" />
        </div>
        <FormRecap className="form-fields__recap" recapCompany={callBackDataCompany}/>
      </div>
      
      <div className="new-intervention-form__buttons">
        <Button text="Annuler" primary={false} handleClick={handleCancel}/>
        <Button text="Programmer" primary={true} handleClick={handleValidate} />
      </div>
    </div>
  )
}

export default NewInterventionForm
