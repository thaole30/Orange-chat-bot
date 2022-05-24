import React from 'react';
import "./Header.scss";
import * as icons from "./HeaderIcons";
import * as svgIcons from './svg/index';
import { useSelector } from 'react-redux';
import CustomButton from './../../components/CustomButton/CustomButton';


const Header = () => {

  const {leftIcon, title, hasRightBtn, rightBtn} = useSelector(state => state.app.headerInfo);
  // console.log("headerInfo", headerInfo);

  return (
    <div className="header-container">
      <div className="header-left">
        <img src={leftIcon} alt="" />
        <p className="header-title">
          {title}
        </p>
      </div>

      <div className="header-right">
        {
          hasRightBtn && (
            <CustomButton style={{width: '150px'}} isIcon = {true} iconSvg={svgIcons.UploadSvg}>
                <p>アップロード</p>
            </CustomButton>
          )
        }
        <p>テナント名</p>
        <div className="tenant-name">
          <span>テナント①</span>
          <img src={svgIcons.UserSvg} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Header