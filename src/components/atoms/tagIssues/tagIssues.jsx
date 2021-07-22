import React from 'react'

const TagsIssues = ({cssClass, text }) => {

return(
  <div className="tag-container">
    <span className={`tags-component ${cssClass}`}>{text}</span> 
  </div>
  )
}

export default TagsIssues;
