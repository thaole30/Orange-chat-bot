import React from 'react'
import AntdInput from '../../components/FormControl/AntdInput/AntdInput'
import {
  EditOutlined
} from '@ant-design/icons';


const SharedForm = ({isEditable, children}) => {

  

  return (
    <div className="profile-form">
      {
        isEditable ? "edit form" : "display form"
      }

      <h2>詳細</h2>
      <AntdInput
        label="電子メールアドレス"
        addonAfter={<EditOutlined/>}
        disabled={!isEditable}
      />

      <AntdInput
        label="パスワード"
        addonAfter={<EditOutlined/>}
        type="password"
        disabled={!isEditable}
      />

      {children}

    </div>
  )
}

export default SharedForm