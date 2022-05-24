import React from 'react'
import ChatboxChat from './ChatboxChat'
import ChatboxHeader from './ChatboxHeader'

const LeftSettingChatBox = () => {
  return (
    <div className="left-setting-chatbox">
      <ChatboxHeader/>
      <ChatboxChat/>
    </div>
  )
}

export default LeftSettingChatBox