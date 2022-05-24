import React from "react";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Input } from "antd";
import "./AntdInput.scss";

const AntdInput = ({ label, type = "text", name, addonAfter, placeholder, ...props }) => {
  return (
    <div className={`antd-input ${label ? 'hasLabel' : ''}`}>
      {label && <label htmlFor={name}>{label}</label>}
      {type === "password" ? (
        <Input.Password
          iconRender={(visible) =>
            visible ? (
              <EyeTwoTone />
            ) : (
              <EyeInvisibleOutlined
              />
              )
            }
            placeholder={placeholder}
            addonAfter={addonAfter}
            {...props}
        />
      ) : (
        <Input placeholder={placeholder} addonAfter={addonAfter} {...props} />
      )}
    </div>
  );
};

export default AntdInput;
