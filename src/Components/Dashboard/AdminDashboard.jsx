import React from 'react'
import Header from '../others/header'
import AllTask from '../others/AllTask'
import CreateTask from '../others/CreateTask'

const AdminDashboard = () => {
  return (
    <div className='h-screen w-full p-10'>
        <div>
            <form >
                <Header/>
                <CreateTask/>  
                <AllTask/>
            </form>
        </div>
    </div>
  )
}

export default AdminDashboard