import React from 'react'

function FormRecap ({className}) {
  return (
    <div className={`recap${className ? ' ' + className : ''}`}>
      <p className="recap__title">Récapitulatif</p>

      <div className="recap__item recap-item">
        <p className="recap-item__title">Type d'incident</p>
        <p className="recap-item__info">Fuite de chaleur</p>
      </div>

      <div className="recap__item item">
        <p className="recap-item__title">Entreprise intervenante</p>
        <p className="recap-item__info">Doolet LLC</p>
        <p className="recap-item__contact-info">05 45 03 35 99</p>
        <p className="recap-item__contact-info">jp@doolet.com</p>
      </div>

      <div className="recap__item item">
        <p className="recap-item__title">Lieu de l’intervention</p>
        <p className="recap-item__info">A003, A106</p>
      </div>
    </div>
  )
}

export default FormRecap
