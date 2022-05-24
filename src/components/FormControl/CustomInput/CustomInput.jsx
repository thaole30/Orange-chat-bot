import React from 'react';
import "./CustomInput.scss";
import {EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons'
import CustomButton from '../../CustomButton/CustomButton';



const CustomInput = ({functionality, label, name, type="text", addedClass ='', half = false, value, placeholder,...props}) => {

  // console.log("handleChange in custom input", props.handleChange);
  return (
      <div className={`custom-input-container ${half && 'halfWidth'} ${functionality}`}>
        {label && <label htmlFor={name}>{label}</label>}
        <span className={props.isIcon ? "input-wrap" : ""}>
          <input
          className={`custom-input ${addedClass}`}
          id={name}
          type={type}
          name={name}
          value = {value}
          onChange = {props.handleChange}
          autoComplete={type="password" && "on"}
          placeholder = {placeholder ? placeholder : null}
          />
          {
              props.isIcon && (
                name === "password" || name === "confirmPassword" ? (
                  <CustomButton addedClass="form-icon-btn" onClick={props.handleshowpassword}>
                        <img src={props.icon} alt=""/>
                  </CustomButton>
                ) : (
                    <CustomButton type="button" addedClass="form-icon-btn">
                        <img src={props.icon} alt="" />
    
                    </CustomButton>
                )
              )
          }
        </span>
      </div>
  )
}

export default CustomInput