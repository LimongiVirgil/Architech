
import React, { useState, useEffect } from 'react'

function Modal ({children, showModal, isloaderModal}) {
  const [shouldScroll, setShouldScroll] = useState(true)

  useEffect(() => {
    setShouldScroll(!showModal)
  }, [showModal])

  useEffect(() => {
    if (shouldScroll) {
      document.documentElement.style.overflow = 'scroll'
      document.body.scroll = "yes"
    } else {
      document.documentElement.style.overflow = 'hidden'
      document.body.scroll = "no"
    }
  }, [shouldScroll])

  return ( 
    <>
    {showModal && 
      <div className="modal">
        <div className={`modal__container${isloaderModal ? ' modal__container--loader' : ''}`}>
          {children}
        </div>
      </div>
    }
    </>
  )
}

export default Modal
