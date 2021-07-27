import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Button from '../../atoms/button/Button'
import InputAndLabel from '../../molecules/inputAndLabel/InputAndLabel'
import Title from '../../atoms/title/title'
import FormRecap from '../../molecules/formRecap/FormRecap'
import Loader from '../../atoms/loader/loader'
import Modal from '../../templates/modal/Modal'

function NewInterventionForm ({ cancelCallback, validateCallback, companyInfo, classRooms, incidentTypeText, issuesIds }) {
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  const [comment, setComment] = useState('')
  const [disableActionButton, setDisableActionButton] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [errorSendForm, setErrorSendForm] = useState(false)

  useEffect(() => {
    if (!selectedDate || !selectedTime) setDisableActionButton(true)
    else setDisableActionButton(false)
  }, [selectedDate, selectedTime])

  function handleCancel () {
    cancelCallback(false)
  }

  async function handleValidate () {
    await createEvent()
  }

  async function createEvent () {
    const incidentsIdsParam = issuesIds.reduce((acc, id) => {
      return acc + `&incident_ids[]=${id}`
    }, '')

    try {
      setIsLoading(true)
      const res = await axios.post(`${import.meta.env.VITE_API_URL}api/post/agenda/new_intervention/1?date=${selectedDate}&time=${selectedTime}&id_company=${companyInfo.id}${incidentsIdsParam}${comment ? `&comment=${comment}` : ''}`)
      
      if (!res && !res.success) {
        setErrorSendForm(true)
        setIsLoading(false)
        return
      }

      setErrorSendForm(false)
      setIsLoading(false)
      validateCallback() // close modal and refresh data
    } catch (error) {
      console.log(error)
      setIsLoading(false)
      setErrorSendForm(true)
    }
  }

  return (
    <div className="new-intervention-form">
      <Title tag="h3" cssClass="card-title">Programmer une intervention</Title>

      <div className="new-intervention-form__fields form-fields">
        <div className="form-fields__inputs">
          <div className="form-fields__container">
            <InputAndLabel 
              inputType="date" 
              label="Date" 
              id="date-intervention" 
              data={selectedDate} 
              updateInput={setSelectedDate} />
            <InputAndLabel inputType="time" 
              label="Heure" 
              id="heure-intervention" 
              data={selectedTime} 
              updateInput={setSelectedTime} />
          </div>
          <InputAndLabel 
            fullWidth={true} 
            inputType="textarea" 
            label="Commentaire (facultatif)" 
            placeholder="Votre commentaire" 
            id="commentaire" 
            data={comment} 
            updateInput={setComment}
          />
        </div>
        <FormRecap className="form-fields__recap" companyInfo={companyInfo} classRooms={classRooms} incidentTypeText={incidentTypeText}/>
      </div>

      { errorSendForm &&
      <div class="new-intervention-form__error">
        <p> Une erreur est survenue lors de l'envoi du formulaire, veuillez réessayer</p>
      </div>
      } 
      
      <div className="new-intervention-form__buttons">
        <Button text="Annuler" primary={false} handleClick={handleCancel}/>
        <Button text="Programmer" primary={true} disable={disableActionButton} handleClick={handleValidate} />
      </div>
      <Modal showModal={isLoading} isloaderModal={true}>
        { isLoading && <Loader error={false} light={true}/>}
      </Modal>
    </div>
  )
}

export default NewInterventionForm
