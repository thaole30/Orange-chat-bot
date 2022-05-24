import { Button, Space } from 'antd';
import React from 'react'
import Header from '../../layout/Header/Header'
import BottomChatBox from './BottomChatBox/BottomChatBox';
import LeftSettingChatBox from './LeftSettingChatBox/LeftSettingChatBox'
import RightSettingChatBox from './RightSettingChatBox/RightSettingChatBox'
import "./SettingChatboxPage.scss";
import { FiSettings } from 'react-icons/fi';
import { RiCamera2Line } from 'react-icons/ri';


const SettingChatboxPage = () => {
  return (
    <div className="setting-chatbox-page">
      <div className="f" style={{gap: '20px'}}>
        <LeftSettingChatBox/>
        <RightSettingChatBox/>
      </div>
      <BottomChatBox/>
      <div className="f-end mt-24">
        <Space style={{gap: '20px'}}>
          <Button size="large" className="f-center bg-orange" style={{display: 'flex', border: 'none'}} type="primary" icon={<FiSettings className="mr-8" />}>
            Download
          </Button>
          <p className="error">元に戻す</p>
          <Button size="large" className="f-center bg-orange" style={{display: 'flex', border: 'none'}} type="primary" icon={<RiCamera2Line className="mr-8" />}>
            保存する
          </Button>
        </Space>
      </div>
    </div>
  )
}

export default SettingChatboxPage