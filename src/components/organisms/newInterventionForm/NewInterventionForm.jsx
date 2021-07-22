import React from 'react'
import Button from '../../atoms/button/Button'
import InputAndLabel from '../../molecules/inputAndLabel/InputAndLabel'
import Title from '../../atoms/title/Title'
import FormRecap from '../../molecules/formRecap/FormRecap'

function NewInterventionForm ({cancelCallback, validateCallback}) {

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
          <InputAndLabel inputType="date" label="Date de l'intervention" id="date-intervention" />
          <InputAndLabel fullWidth={true} inputType="textarea" label="Commentaire (facultatif)" id="commentaire" placeholder="Votre commentaire" />
        </div>
        <FormRecap className="form-fields__recap"/>
      </div>
      
      <div className="new-intervention-form__buttons">
        <Button text="Annuler" primary={false} handleClick={handleCancel}/>
        <Button text="Programmer" primary={true} handleClick={handleValidate} />
      </div>
    </div>
  )
}

export default NewInterventionForm
