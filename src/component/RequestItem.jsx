import React from 'react'

const RequestItem = () => {
  return (
     <div className='flex gap-60 items-center px-3 py-3 mb-0.5 border-black rounded-xl'>
                <div className='flex gap-2 items-center'>
                    <img src="src/images/profile.png" alt="" />
                    <p className='text-2xl'>User Name</p>
                </div>
                <div className='flex gap-10'>
                <div>
                    <button className='text-2xl cursor-pointer text-green-500'>Accept</button>
                </div>
                <div>
                    <button className='text-2xl cursor-pointer text-red-500'>Reject</button>
                </div>
                </div>
        </div>
  )
}

export default RequestItem