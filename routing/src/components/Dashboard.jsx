import React from 'react'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
     dashboard page 
     <Outlet />
    </div>
  )
}

export default Dashboard
