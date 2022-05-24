import { Button, Input, Space } from 'antd';
import React from 'react';
import { AiOutlineCopy } from 'react-icons/ai';


const BottomChatBox = () => {
  return (
    <div className="bottom-chat-box">
        <h3 className="text-20 bold">
            チャットボックス
        </h3>
        <p className="text-14">チャットボットを表示したいページの&lt;/body&gt;タグの前に以下のHTMLを埋め込んでください</p>
        <div className="f a-center mt-16" style={{gap: '16px'}}>
            <Input className="flex-1" defaultValue='<script src="https://localhost:8443/chatbot/forLP.js" charset="UTF-8" tenant-id="cc88883ebffbe99bfda924c637edd315" url-page-counter="google.com"></script>'/>
            <Button className="f-center bg-orange" style={{display: 'flex', color: 'white', border: 'none'}} shape="circle" icon={<AiOutlineCopy />} />
        </div>
    </div>
  )
}

export default BottomChatBox