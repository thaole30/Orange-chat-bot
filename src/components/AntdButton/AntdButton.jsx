import { Button } from 'antd'
import React from 'react'

const AntdButton = ({children, addedClass, name, icon, size, disabled, onClick}) => {
  return (
    <Button
    icon={icon}
    size={size}
    disabled={disabled}
    className={`antd-custom-button ${addedClass ? addedClass : ''} ${name}`}
    onClick={onClick}
    >{children}</Button>
  )
}

export default AntdButton