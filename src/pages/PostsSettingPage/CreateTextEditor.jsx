import React, { useRef, useState } from 'react';
import SharedTextEditor from './SharedTextEditor';
import EditorComponent from './EditorComponent/EditorComponent';

const CreateTextEditor = (props) => {
  console.log("props",props);
  const editorRef = useRef(null);
  const [content, setContent] = useState("");
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  const handleEditorChange = (content, editor) => {
    console.log("content", content)
    setContent(content);
  };

  return (
      <SharedTextEditor>
        <EditorComponent/>
      </SharedTextEditor>
  )
}

export default CreateTextEditor