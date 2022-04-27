import React from 'react'

const SharedForm = ({isEditable}) => {
  return (
    <div>
      {
        isEditable ? "edit form" : "display form"
      }
    </div>
  )
}

export default SharedForm