import React from 'react'
import Sidenavbar from './sidenavbar'
import Dashboard from './maincontent'

const Adminlanding = () => {
  return (
    <div className='flex bg-[#0f0f0f] '>
        <Sidenavbar/>
        <Dashboard/>
    </div>
  )
}

export default Adminlanding
