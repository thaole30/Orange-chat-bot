import { Table } from "antd";
import React from "react";
import { scenarioUsages } from "./data";

const ScenarioUsage = () => {
  const data = scenarioUsages;
  const columns = [
    {
      title: "項番",
      dataIndex: "key",
    },
    {
      title: "シナリオ名",
      dataIndex: "name",
    },
    {
      title: "使用回数",
      dataIndex: "numUse",
    },
    {
      title: "ランディングページ",
      dataIndex: "landPage",
    },
  ];

  return (
    <div className="scenario-usage">
      <h3 className="text-20 bold">シナリオ間の使用率</h3>
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 10 }}
      ></Table>
    </div>
  );
};

export default ScenarioUsage;
