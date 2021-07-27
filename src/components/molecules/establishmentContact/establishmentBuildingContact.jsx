import React from 'react'
import Title from '../../atoms/title/title'
import ContactInfo from '../../atoms/contactInfo/ContactInfo'

const EstablishmentBuildingContact = ({address, mail, phone, nbRooms}) => {
  return (
    <div className="establishmentContact">
      <Title cssClass="detailed-information-title">
        Adresse de l’établissement
      </Title>
      <div className="commonData">
        <p className="address">{address}</p>
        <ContactInfo type="mail" contactInfo={mail}/>
        <ContactInfo type="tel" contactInfo={phone}/>
      </div>
      <div className="importantData">
        <p className="number">{nbRooms}</p>
        <p>{ nbRooms > 1 ? 'salles' : 'salle'}</p>
      </div>
    </div>
  )
}

export default EstablishmentBuildingContact
