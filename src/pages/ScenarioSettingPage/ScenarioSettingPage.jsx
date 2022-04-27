import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../layout/Header/Header'
import ScenarioList from './ScenarioList'

const ScenarioSettingPage = () => {
  return (
    <div>
        {/* <Header/> */}
        <ScenarioList/>
      <Outlet />
    </div>
  )
}

export default ScenarioSettingPage