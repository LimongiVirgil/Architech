import React from 'react'
import Title from '../../atoms/title/title'

const EstablishmentBuildingContact = ({address, mail, phone, nbRooms}) => {
  return (
    <div className="establishmentContact">
      <Title cssClass="detailed-information-title">
        Adresse de l’établissement
      </Title>
      <div className="commonData">
        <p className="address">{address}</p>
        <p className="contact">{mail}</p>
        <p className="contact">{phone}</p>
      </div>
      <div className="importantData">
        <p className="number">{nbRooms}</p>
        <p>{ nbRooms > 1 ? 'salles' : 'salle'}</p>
      </div>
    </div>
  )
}

export default EstablishmentBuildingContact
