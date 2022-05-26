import { Space } from 'antd'
import React from 'react'
import CircleChart from './CircleChart';
import FrequentPage from './FrequentPage/FrequentPage';
import ScenarioUsage from './ScenarioUsage/ScenarioUsage';

const BarGraph = () => {
  return (
    <div className="bar-graph mt-20">
      <div className="f" style={{gap: '20px'}}>
        <FrequentPage/>
        <CircleChart/>
      </div>
      <ScenarioUsage/>
    </div>
  )
}

export default BarGraph