import React from 'react'
import { useParams } from 'react-router-dom';
import EditorComponent from './EditorComponent/EditorComponent';
import SharedTextEditor from './SharedTextEditor'

const EditTextEditor = () => {


  return (
    <div className="post-editor-container">
        <SharedTextEditor>
          <EditorComponent/>
        </SharedTextEditor>
    </div>
  )
}

export default EditTextEditor