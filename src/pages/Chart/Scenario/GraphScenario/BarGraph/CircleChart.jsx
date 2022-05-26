import { Space } from 'antd';
import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';

const CircleChart = () => {
  return (
    <div className="circle-chart-section f-column">
        <h3 className="text-20 bold">シナリオ間の使用率</h3>
        <div className="f-center">
          <PieChart
          className="circle-chart"
          startAngle={270}
          style={{ position: "relative" }}
          lineWidth={20}
            data={[
              {
                value: 10,
                color: "#FFA544",
              },
              { value: 20, color: "#4623E9" },
              {
                value: 20,
                color: "#FFADD2",
              
              },
            ]}
          />;
        </div>
        <Space>
          <Space className="note-item">
              <div className="square-box orange"></div>
              <p>面談日程</p>
          </Space>
          <Space className="note-item">
              <div className="square-box purple"></div>
              <p>面談日程</p>
          </Space>
          <Space className="note-item">
              <div className="square-box pink"></div>
              <p>面談日程</p>
          </Space>
        </Space>
    </div>
  )
}

export default CircleChart