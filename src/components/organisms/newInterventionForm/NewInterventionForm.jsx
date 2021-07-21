import React from 'react'
import Button from '../../atoms/button/Button'
import InputAndLabel from '../../molecules/inputAndLabel/InputAndLabel'
import Title from '../../atoms/title/Title'

function NewInterventionForm () {
  return (
    <div className="new-intervention-form">
      <Title cssClass="card-title">Programmer une intervention</Title>

      <InputAndLabel inputType="textarea" label="Commentaire (facultatif)" placeholder="Votre commentaire" id="commentaire" />
      
      <div className="new-intervention-form__buttons">
        <Button text="Annuler l’action" primary={false} />
        <Button text="Programmer l’intervention" primary={true} />
      </div>
    </div>
  )
}

export default NewInterventionForm