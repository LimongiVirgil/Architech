import React, { useState } from 'react'
import CalendarList from '../organisms/calendarList/CalendarList'
import NewInterventionForm from '../organisms/newInterventionForm/NewInterventionForm'
import Modal from '../templates/modal/Modal'
import Page from '../templates/page/Page'

const Agenda = () => {
  const [showModal, setShowModal] = useState(true)

  return (
    <Page>
      <CalendarList/>
      <Modal showModal={showModal}>
        <NewInterventionForm cancelCallback={setShowModal} validateCallback={setShowModal}/>
      </Modal>
    </Page>
  );
}

export default Agenda;
