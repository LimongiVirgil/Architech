import React from 'react'

const Title = ({children, cssClass, tag = 'h1'}) => {
  const Tag = tag
  return (
    <Tag className={`title-component ${cssClass}`}>{children}</Tag>
  )
}

export default Title;
