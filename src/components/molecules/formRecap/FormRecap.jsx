import React from 'react'

function FormRecap ({ className, companyInfo }) {
  return (
    <div className={`recap${className ? ' ' + className : ''}`}>
      <p className="recap__title">Récapitulatif</p>

      <div className="recap__item recap-item">
        <p className="recap-item__title">Type d'incident</p>
        <p className="recap-item__info">Fuite de châleur</p>
      </div>

      <div className="recap__item item">
        <p className="recap-item__title">Entreprise intervenante</p>
        <p className="recap-item__info">{companyInfo.name}</p>
        <p className="recap-item__contact-informations">{companyInfo.phone}</p>
        <p className="recap-item__contact-informations">{companyInfo.mail}</p>
      </div>

      <div className="recap__item item">
        <p className="recap-item__title">Lieu de l’intervention</p>
        <p className="recap-item__info">A003, A106</p>
      </div>
    </div>
  )
}

export default FormRecap
