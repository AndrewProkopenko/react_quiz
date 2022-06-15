import React from 'react'
import { Outlet } from 'react-router-dom'
import Main from '../navbar/Main'

const MainLayout = () => {
  return (
    <div>
        <Main />
        <Outlet />
    </div>
  )
}

export default MainLayout