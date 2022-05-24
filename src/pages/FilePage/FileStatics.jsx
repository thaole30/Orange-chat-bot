import React from "react";
import { statics } from "./data/data";
import "./FilePage.scss";
import static1 from "./svg/static1.svg";

const FileStatics = () => {
  return (
    <div className="file-statics">
      <div className="file-statics-left">
        {statics.map((item, index) => {
          return (
            <div className="static-item" key={`static-${index}`}>
              <div className="static-icon">
                <div className="layout" style={{backgroundColor: `${item.bgColor}`, opacity: '0.1'}}></div>
                <img src={item.icon} alt="" />
              </div>
              <div className="static-info">
                <h2>{item.amount}</h2>
                <p>{item.desc}</p>
              </div>
            </div>
          );
        })}

      </div>

      <div className="file-statics-right"></div>
    </div>
  );
};

export default FileStatics;
