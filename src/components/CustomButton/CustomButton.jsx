import React from 'react';
import "./CustomButton.scss";

const CustomButton = ({children, isIcon, iconSvg, isDisabled = false, addedClass='', hasBg, danger, isSuccess, type = 'button', ...props}) => {
  return (
    <button
        type={type}
        disabled = {isDisabled}
        className={`custom-button ${addedClass ? addedClass : ''} ${isIcon ? 'hasIconBtn' : ''} ${hasBg ? 'hasBg' : ''} ${isSuccess ? 'success-btn' : ''} ${danger ? 'danger-btn' : ''} `}
        onClick={props.onClick}
        {...props}
    >
        {
          isIcon && (
            <img src={iconSvg} alt="" />
          )
        }
        {children}
    </button>
  )
}

export default CustomButton