import React, { useEffect } from 'react'

const SuccessNotif = ({ show, updateShow, message }) => {

  useEffect(() => {
    setTimeout(() => updateShow(false), 3500)
  }, [show])

  return (
    <div className={`success-notification ${show ? ' success-notification--is-showing' : ''}`}>
      <p>{message}</p>
    </div>
  );
};

export default SuccessNotif
