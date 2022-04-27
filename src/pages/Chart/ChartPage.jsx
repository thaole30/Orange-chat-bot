import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../layout/Header/Header'

const ChartPage = () => {
  return (
    <div>
        {/* <Header/> */}
        <Outlet/>
    </div>
  )
}

export default ChartPage