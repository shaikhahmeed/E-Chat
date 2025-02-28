import React from 'react'
import { IoPersonAdd } from "react-icons/io5";

const UserItem = () => {
  return (
    <div className='flex gap-60 items-center px-3 py-3 mb-0.5 border-black rounded-xl'>
        <div className='flex gap-2 items-center'>
            <img src="src/images/profile.png" alt="" />
            <p className='text-2xl'>User Name</p>
        </div>
        <div>
            <button className='text-2xl cursor-pointer'><IoPersonAdd /> </button>
        </div>
    </div>
  )
}

export default UserItem