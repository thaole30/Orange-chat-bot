import React, { useState } from 'react';
import { Table } from 'antd';
import { filesData } from './data/data';
import moment from 'moment';

const columns = [
  {
    title: 'ファイル名',
    dataIndex: 'name',
  },
  {
    title: '作成日',
    dataIndex: 'createdDate',
    render: (field, record, index) => {
      return (
        <b>{moment.utc(field).local().startOf('seconds').fromNow()}</b>
      )
    }
  },
  {
    title: 'サイズ',
    dataIndex: 'size',
    render: (field, record, index) => {
      return (
        <span>{field} MB</span>
      )
    },
    sorter: (file1, file2) => Number(file1.size) - Number(file2.size),
  },
  {
    title: '更新日',
    dataIndex: 'createdDate',
    sorter: (file1, file2) => moment(file1.createdDate) - moment(file2.createdDate),

  },
];

const data = filesData;

const FileTable = () => {

  console.log("check date", moment("2022/01/25") );
  console.log("------date-----",moment.utc("2022/04/25").local().startOf('seconds').fromNow())

  const [state, setState] = useState({
    selectedRowKeys: [],
  });

  console.log("selectedRowKeys", state.selectedRowKeys);

  const onSelectChange = selectedRowKeys => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    setState({ selectedRowKeys });
  };

  const { selectedRowKeys } = state;
    const rowSelection = {
      selectedRowKeys,
      onChange: onSelectChange,
   
    };

  return (
    <div className="file-table">
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
    </div>
  )
}

export default FileTable