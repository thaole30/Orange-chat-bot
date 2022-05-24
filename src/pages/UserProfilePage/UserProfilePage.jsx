import React from 'react';
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import BasicInfo from './BasicInfo/BasicInfo';
import Header from '../../layout/Header/Header';
import "./UserProfilePage.scss";


const UserProfilePage = () => {
  return (
    <div className="user-profile-container">
        {/* <Header/> */}
        <BasicInfo/>
        <Outlet/>
    </div>
  )
}

export default UserProfilePage