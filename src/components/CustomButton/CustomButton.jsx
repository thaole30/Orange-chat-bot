import React from 'react';
import "./CustomButton.scss";

const CustomButton = ({children, isDisabled = false, addedClass='', hasBg, danger, type = 'button', ...props}) => {
  return (
    <button
        type={type}
        disabled = {isDisabled}
        className={`custom-button ${addedClass ? addedClass : ''} ${hasBg ? 'hasBg' : ''}  ${danger ? 'danger-btn' : ''} `}
        onClick={props.onClick}
        {...props}
    >
        {children}
    </button>
  )
}

export default CustomButton