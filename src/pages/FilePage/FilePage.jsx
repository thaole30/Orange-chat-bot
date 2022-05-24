import React from 'react'
import Header from '../../layout/Header/Header'
import "./FilePage.scss";
import FileStatics from './FileStatics';
import FileTable from './FileTable';


const FilePage = () => {
  return (
    <div className="file-page">
      {/* <Header/> */}
      <FileStatics/>
      <FileTable/>
    </div>
  )
}

export default FilePage