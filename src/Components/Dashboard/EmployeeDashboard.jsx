import React from 'react'
import Header from '../others/header'
import TaskListNumbers from '../others/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({data}) => {
    console.log(props);
    
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
        <Header data = {data}/>
        <TaskListNumbers data = {data} />
        <TaskList data = {data} />
    </div>
  )
}

export default EmployeeDashboard