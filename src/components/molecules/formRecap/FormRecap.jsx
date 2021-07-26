import React, { useEffect, useState } from 'react'

function FormRecap ({ className, companyInfo, classRooms, incidentTypeText }) {
  const [classRoomsText, setClassRoomsText] = useState('')

  useEffect(() => {
    formatClassRoomsText()
  }, [classRooms])

  function formatClassRoomsText() {
    const text = classRooms.reduce((acc, curr, index) => {
      if (index === 0) return curr
      return acc + ', ' + curr 
    }, '')
    setClassRoomsText(text)
  }


  return (
    <div className={`recap${className ? ' ' + className : ''}`}>
      <p className="recap__title">Récapitulatif</p>

      <div className="recap__item recap-item">
        <p className="recap-item__title">Type d'incident</p>
        <p className="recap-item__info">{incidentTypeText}</p>
      </div>

      <div className="recap__item item">
        <p className="recap-item__title">Entreprise intervenante</p>
        <p className="recap-item__info">{companyInfo.name}</p>
        <p className="recap-item__contact-informations">{companyInfo.phone}</p>
        <p className="recap-item__contact-informations">{companyInfo.mail}</p>
      </div>

      <div className="recap__item item">
        <p className="recap-item__title">Lieu de l’intervention</p>

        <p className="recap-item__info">{classRoomsText}</p>
      </div>
    </div>
  )
}

export default FormRecap
