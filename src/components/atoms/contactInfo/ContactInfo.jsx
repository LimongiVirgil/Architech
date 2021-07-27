import React from 'react'

function ContactInfo ({ type, contactInfo  }) {
  const action = type === 'mail' ? 'mailto' : 'tel'
  return (
    <a className="contact-info" href={`${action}:${contactInfo}`}>{contactInfo}</a>
  )
}

export default ContactInfo
