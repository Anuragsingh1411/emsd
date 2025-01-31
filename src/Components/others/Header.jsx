import React from 'react'

const Header = ({data}) => {
  return (
    <div className='flex item-center justify-between'>
        <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>{data.firstName}</span></h1>
        <button  className='bg-red-600 text-base font-medium text-white px-5 py-2 rounded-md'>Log Out</button>
    </div>
  )
}

export default Header