import React from 'react';
import "./Header.scss";
import * as icons from "./HeaderIcons";
import * as svgIcons from '../../assets/svg';


const Header = () => {
  return (
    <div className="header-container">
      <div className="header-left">
        <img src={icons.UserIcon} alt="" />
        <p className="header-title">
          プロファイル
        </p>
      </div>

      <div className="header-right">
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