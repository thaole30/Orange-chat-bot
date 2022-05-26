import React from 'react';
import { Tabs } from 'antd';
import { useNavigate } from 'react-router-dom';
const { TabPane } = Tabs;

const GraphTabs = ({activeGraphTab, setActiveGraphTab}) => {

  const onChangeGraphTab = (key) => {
    // console.log(key);
    setActiveGraphTab(key);
}


  return (
    <div className="graph-tabs">
          <Tabs activeKey={activeGraphTab} onChange={onChangeGraphTab}>
            <TabPane tab={<HeaderTab title="添付ファイル" keyTab="table"/>} key="table">
            </TabPane>
            <TabPane tab={<HeaderTab title="シナリオ" keyTab="bar"/>} key="bar">
            </TabPane>
            <TabPane tab={<HeaderTab title="アクセス数" keyTab="line"/>} key="line">
            </TabPane>
            <TabPane tab={<HeaderTab title="開始数・離脱数" keyTab="column"/>} key="column">
            </TabPane>
        </Tabs>
    </div>
  )
}

const HeaderTab = ({title, keyTab}) => {
  const navigate = useNavigate();


  return (
    <div className="tab-link"
      onClick={() => {
        navigate(`/chart/graph/${keyTab}`);
    
      }}
    >
      {title}
    </div>
  )
}


export default GraphTabs