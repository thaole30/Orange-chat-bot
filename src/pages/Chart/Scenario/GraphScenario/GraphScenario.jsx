import { DatePicker, Space } from "antd";
import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import GraphTabs from "./GraphTabs/GraphTabs";
import "./GraphScenario.scss";

const { RangePicker } = DatePicker;


const GraphScenario = () => {
  const location = useLocation();
  const [activeGraphTab, setActiveGraphTab] = useState("");

  useEffect(() => {
    const graphType = location.pathname.split("/")[3];

    setActiveGraphTab(graphType);
  }, [location]);

  return (
    <div className="graph-scenario">
      <div className="f-between">
        <GraphTabs
          activeGraphTab={activeGraphTab}
          setActiveGraphTab={setActiveGraphTab}
        />
        <Space>
          <p>期間</p>
          <RangePicker />
        </Space>
      </div>
      <Outlet />
    </div>
  );
};

export default GraphScenario;
