import { Space, DatePicker, Table } from 'antd'
import React from 'react';
import icon1 from "../svg/icon1.svg";
import icon2 from "../svg/icon2.svg";
import icon3 from "../svg/icon3.svg";
import icon4 from "../svg/icon4.svg";
import { IoMdArrowDropdown, IoMdArrowDropright } from 'react-icons/io';
import { coupons } from '../../data/data';

const { RangePicker } = DatePicker;

const CuponTable = () => {

    const columns = [
        {
          title: "#",
          dataIndex: "stt",
        },
        {
          title: "名前",
          dataIndex: "name",
          
        },
        {
          title: "作成日",
          dataIndex: "number",
         
        },
        {
          title: "開始日",
          dataIndex: "sdate",
         
        },
        {
          title: "終了日",
          dataIndex: "edate",
          
        },
        {
            title: "電話番号",
            dataIndex: "phone",
           
        },
        {
            title: "対応状況",
            dataIndex: "checkbox",
            render: () => {
                return <input type="checkbox" />
            }
        },
      ];

  return (
    <div className="cupon-table-section">
        <div className="cupon-header f-between">
            <Space>
                <div className="f-center scenario-icon">
                    <img src={icon1} alt="" />
                </div>
                <h2 className="bold text-20">クーポン</h2>
                <IoMdArrowDropdown style={{fontSize: '30px'}}/>
            </Space>
            <Space>
                <p>期間</p>
                <RangePicker />
            </Space>
        </div>

        <div className="cupon-table-content mt-16">
            <Table 
              className="cupon-table"
              columns={columns}
              dataSource={coupons}
            />
        </div>

    </div>
  )
}

export default CuponTable