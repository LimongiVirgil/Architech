import React, { useState } from 'react'
import CalendarList from '../organisms/calendarList/CalendarList'
import NewInterventionForm from '../organisms/newInterventionForm/NewInterventionForm'
import Modal from '../templates/modal/Modal'

const Agenda = () => {
  const [showModal, setShowModal] = useState(true)

  return (
    <div className="agenda">
    <CalendarList/>
    <Modal showModal={showModal}>
      <NewInterventionForm cancelCallback={setShowModal} validateCallback={setShowModal}/>
    </Modal>
    </div>
  );
}

export default Agenda;
