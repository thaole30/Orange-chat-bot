import React from 'react';
import CuponTable from './CuponTable/CuponTable';
import "./Scenario.scss";
import icon1 from "./svg/icon1.svg";
import icon2 from "./svg/icon2.svg";
import icon3 from "./svg/icon3.svg";
import icon4 from "./svg/icon4.svg";
import { IoMdArrowDropdown, IoMdArrowDropright } from 'react-icons/io';
import { DatePicker, Space } from 'antd';

const { RangePicker } = DatePicker;


const Scenario = () => {
  return (
    <div className="scenario">
      <CuponTable/>
      
      <div className="ticket-reservation secondary-section mt-16">
        <div className="f-between">

            <Space>
                <div className="f-center scenario-icon">
                    <img src={icon2} alt="" />
                </div>
                <h2 className="bold text-20">航空券予約</h2>
                <IoMdArrowDropright style={{fontSize: '30px'}}/>
            </Space>
            <Space>
                <p>期間</p>
                <RangePicker />
            </Space>
        </div>
      </div>
      
      <div className="secondary-section mt-16">
        <div className="f-between">

            <Space>
                <div className="f-center scenario-icon">
                    <img src={icon3} alt="" />
                </div>
                <h2 className="bold text-20">インタビュースケジュール</h2>
                <IoMdArrowDropright style={{fontSize: '30px'}}/>
            </Space>
            <Space>
                <p>期間</p>
                <RangePicker />
            </Space>
        </div>
      </div>
      
      <div className="secondary-section mt-16">
        <div className="f-between">

            <Space>
                <div className="f-center scenario-icon">
                    <img src={icon4} alt="" />
                </div>
                <h2 className="bold text-20">航空券予約</h2>
                <IoMdArrowDropright style={{fontSize: '30px'}}/>
            </Space>
            <Space>
                <p>期間</p>
                <RangePicker />
            </Space>
        </div>
      </div>
    </div>
  )
}

export default Scenario