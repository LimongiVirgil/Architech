import React from 'react'
import Title from '../../atoms/title/title'

const EstablishmentManagerContact = ({firstName, lastName, mail, phone, nbSensors}) => {
  return (
    <div className="establishmentContact">
      <Title cssClass="detailed-information-title">
        Représentant de l’établissement
      </Title>
      <div className="commonData">
        <p className="name">{firstName} {lastName}</p>
        <p className="contact">{mail}</p>
        <p className="contact">{phone}</p>
      </div>
      <div className="importantData">
        <p className="number">{nbSensors}</p>
        <p>{nbSensors > 1 ? 'capteurs' : 'capteur'}</p>
      </div>
    </div>
  )
}

export default EstablishmentManagerContact;
