import React from 'react'

const FailedTask = () => {
  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 bg-yellow-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'></h3>
                <h4 className='text-sm'></h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'></h2>
            <p className='text-sm mt-2'>
                
            </p>
            <div className='mt-6'>
                <button className='w-full bg-red-500 rounded font-medium py-1 px-2 text-xs'>Failed</button>
            </div>
        </div>
  )
}

export default FailedTask