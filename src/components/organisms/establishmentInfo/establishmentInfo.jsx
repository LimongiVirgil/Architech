import React, { useEffect, useState } from 'react';
import Title from '../../atoms/title/title'
import EstablishmentManagerContact from '../../molecules/establishmentContact/establishmentManagerContact';
import EstablishmentBuildingContact from '../../molecules/establishmentContact/establishmentBuildingContact';
import Card from '../../templates/card/Card';

const EstablishmentInfo = () => {
  const [establishmentData, setEstablishmentData] = useState(false)

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}api/dashboard/infobuilding/1`)
      .then(response => response.json())
      .then(result => setEstablishmentData(result));
  }, [])

  return (
    <Card>
      <div className="establishmentInfo">
        <Title cssClass="card-title">
          Fiche de l’établissement
        </Title>
        <div>
          {establishmentData && 
            <EstablishmentBuildingContact
            address={establishmentData.building.address}
            mail={establishmentData.building.mail}
            phone={establishmentData.building.phone_building}
              nbRooms={establishmentData.stats.number_rooms}
              />
            }
          {establishmentData && 
            <EstablishmentManagerContact
              firstName={establishmentData.manager.first_name}
              lastName={establishmentData.manager.last_name}
              mail={establishmentData.manager.manager_mail}
              phone={establishmentData.manager.phone_manager}
              nbSensors={establishmentData.stats.number_sensors}
              />
            }
        </div>
      </div>
    </Card>
  )
}

export default EstablishmentInfo
