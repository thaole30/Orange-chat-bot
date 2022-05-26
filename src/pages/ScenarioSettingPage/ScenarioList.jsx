import React, { useState } from 'react';
import EmptyData from '../../components/EmptyData/EmptyData';
import * as icons from "./svg/index";
import { Divider, Radio, Space, Table, Tag } from 'antd';

const ScenarioList = () => {

  const [scenarios, setScenarios] = useState([{
    name: {
      icon: icons.icon1,
      text: "インタビュースケジュール"
    },
    creator: "UserName",
    date: "2022/05/30",
    tags: ["orange", "orange"],
    table: [
      {
        message: "",
        control: {
          label: "",
          data: {
            Option: ["", ""],
            Datapicker: { stime: "", etime: "" },
            Dropdown: ["", ""],
          },
          input: ["input: text", "input: tel", "input: email"],
        },
        name: "",
        cv: false,
      },
    ]
  }]);

  
  const columns = [
    {
      title: "シナリオ名",
      dataIndex: "name",
      render: (name) => {

        return (
          <>
            <img src={name.icon} alt="" />
            <span>{name.text}</span>
          </>
        );
      },
      
    },
    {
      title: "作成者",
      dataIndex: "creator",
      width: "15%",
    },
    {
      title: "作成日",
      dataIndex: "date",
      width: "15%",
    },
    {
      title: "タグ",
      dataIndex: "tags",
      width: "25%",
      render: (tags) => {
        return (
          <Space>
            {
              tags.map((tag, index) => {
                return <Tag key={index} style={{backgroundColor: "#FFF7E6", borderColor: "#FFD591", color: "#FA8C16"}}>{`#${tag}`}</Tag>
              })
            }
          </Space>
        );
      },
    },
    {
      title: "Title",
      dataIndex: "title",
      with: "15%",
      render: () => {
        return <a>Edit</a>
      }
    },
  ];


  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === 'Disabled User',
      // Column configuration not to be checked
      name: record.name,
    }),
  };
  


  return (
    <div className="scenario-list">
      {
        scenarios.length === 0 ? (
          <EmptyData/>
        ) : (
          <Table
            rowSelection={{
              type: "checkbox",
              ...rowSelection,
            }}
            columns={columns}
            dataSource={scenarios}
          />
        )
      }
    </div>
  )
}

export default ScenarioList