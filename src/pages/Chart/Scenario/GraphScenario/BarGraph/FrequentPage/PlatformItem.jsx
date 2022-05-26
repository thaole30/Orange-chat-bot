import React from 'react';
import { Space } from 'antd'


const PlatformItem = ({icon, name, number, decor, bgColor}) => {
  return (
    <div className="platform-item f-between" style={{ backgroundColor: bgColor }}>
            <img src={icon} alt="" />
            <div className="white">
                <p className="uppercase">{name}</p>
                <p className="bold">{number}</p>
            </div>
            <img src={decor} alt="" />

    </div>
  )
}

export default PlatformItem