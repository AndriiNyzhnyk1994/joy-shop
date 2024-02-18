import React from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'

const MainLayout:React.FC = () => {
  return (
    <div className='wrapper'>
        <Header/>
        <div className='container'>
            <Outlet/>
        </div>
    </div>
  )
}

export default MainLayout