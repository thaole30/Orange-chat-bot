import React from 'react';
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import Header from '../../layout/Header/Header';


const UserProfilePage = () => {
  return (
    <div>
        {/* <Header/> */}
        <div>Avatar left</div>
        <Outlet/>
    </div>
  )
}

export default UserProfilePage