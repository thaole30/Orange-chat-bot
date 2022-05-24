import React from "react";
import { RiPantoneLine } from "react-icons/ri";
import MyDivider from "../../../components/MyDivider/MyDivider";
import {
    Form,
    Input,
    Button,
    Space,
    Upload,
    Row,
    Col,
    Radio,
    Select,
    Checkbox,
    DatePicker,
  } from "antd";


const ChatboxChat = () => {

    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log("Success:", values);
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
      };

  return (
    <div className="setting-chatbox-chat">
      <div className="f-between">
        <h3 className="text-20 bold">チャットボックス</h3>
        <div className="setting-chatbox-chat-right">
          <Space>
            <span>背景</span>
            <Button
              className="f-center"
              style={{ width: "60px", display: "flex" }}
              icon={<RiPantoneLine />}
            />
          </Space>
        </div>
      </div>
      <MyDivider />
      <Form
        layout="vertical"
        form={form}
        // initialValues={{ remember: true }}
        id="request-organization-form"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        initialValues={{}}
      >
        <Form.Item
          name="post"
          label={<p className="text-14 semi-bold text-gray">本文</p>}
        >
          <div className="f" style={{alignItems: 'flex-start', gap: "20px"}}>
            <Form.Item name="prizeName" className="f-1">
              <Input placeholder="お問い合わせ内容を入力していただくか、以下から選んでください。"/>
            </Form.Item>
            <Form.Item name="prizeName">
              <select style={{ height: "32px", width: "80px" }}>
                <option value="14">14</option>
              </select>
            </Form.Item>
            <Button className="f-center" style={{width: '60px', display: 'flex'}} icon={<RiPantoneLine />}/>

          </div>
        </Form.Item>
        <Form.Item
          name="scenario"
          label={<p className="text-14 semi-bold text-gray">シナリオ</p>}
        >
          <div className="f" style={{alignItems: 'flex-start', gap: "20px"}}>
            <Form.Item name="prizeName" className="f-1">
              <Input placeholder="お問い合わせ内容を入力していただくか、以下から選んでください。"/>
            </Form.Item>
            <Form.Item name="prizeName">
              <select style={{ height: "32px", width: "80px" }}>
                <option value="14">14</option>
              </select>
            </Form.Item>
            <Button className="f-center" style={{width: '60px', display: 'flex'}} icon={<RiPantoneLine />}/>

          </div>
        </Form.Item>
        <Form.Item
          name="input-field"
          label={<p className="text-14 semi-bold text-gray">入力欄</p>}
        >
          <div className="f" style={{alignItems: 'flex-start', gap: "20px"}}>
            <Form.Item name="prizeName" className="f-1">
              <Input placeholder="お問い合わせ内容を入力ください"/>
            </Form.Item>
            <Form.Item name="prizeName">
              <select style={{ height: "32px", width: "80px" }}>
                <option value="14">14</option>
              </select>
            </Form.Item>
            <Button className="f-center" style={{width: '60px', display: 'flex'}} icon={<RiPantoneLine />}/>

          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ChatboxChat;
