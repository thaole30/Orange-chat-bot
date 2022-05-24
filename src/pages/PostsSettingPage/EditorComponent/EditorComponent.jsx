import React, { useContext, useEffect, useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import moment from "moment";
import { getDetailPost } from '../context/postActions';
import { PostContext } from '../context/postContext';
import { useLocation, useParams } from 'react-router-dom';



const EditorComponent = (props) => {
   
    const {postContext, dispatch} = useContext(PostContext);
    const [editorMode, setEditorMode] = useState("create");
    const location = useLocation();
    const {postId} = useParams();




    const editorRef = useRef(null);
    // const [content, setContent] = useState("");
    const log = () => {
      if (editorRef.current) {
        console.log(editorRef.current.getContent());
      }
    };
  
    const handleEditorChange = (content, editor) => {
    //   console.log("content", content)
      props.newprop.setContent(content);
      props.newprop.setEditing(true);
    };

    useEffect(() => {
      if(postId) {
        setEditorMode("edit");
        dispatch(getDetailPost(props.postId || postId));
      }
    }, [postId])

  return (
        <div className="create-editor f-1"> 
          <Editor
            onInit={(evt, editor) => editorRef.current = editor}
            initialValue= {`${editorMode === "edit" ? postContext.postDetail.content : ""}`}
            init={{
              height: 500,
              menubar: false,
              plugins: [
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "casechange",
                "insertfile",
                "file",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "preview",
                "help",
                "wordcount",
                "pagebreak",
              ],
              toolbar: 'undo redo | formatselect | ' +
              'bold italic backcolor | alignleft aligncenter ' +
              'alignright alignjustify | bullist numlist outdent indent | ' +
              'removeformat | help',
              content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
            }}
            onEditorChange={handleEditorChange}
          /> 
           {/* <button onClick={log}>Log editor content</button>  */}
         </div> 
  )
}

export default EditorComponent