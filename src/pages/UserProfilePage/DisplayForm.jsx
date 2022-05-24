import React from 'react'
import SharedForm from './SharedForm'

const DisplayForm = () => {

  const onChange = (e) => {
    console.log("value search", e.target.value);
  }

  return (
    <>
        <SharedForm isEditable={false} />
    </>
  )
}

export default DisplayForm