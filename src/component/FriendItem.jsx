import React from 'react'
import { GoBlocked } from "react-icons/go";
import { FaUserNinja } from "react-icons/fa6";


const FriendItem = () => {
  return (
    <div className='flex gap-60 items-center px-3 py-3 mb-0.5 border-black rounded-xl'>
            <div className='flex gap-2 items-center'>
                <img src="src/images/profile.png" alt="" />
                <p className='text-2xl'>User Name</p>
            </div>
            <div className='flex gap-10'>
            <div>
                <button className='text-2xl cursor-pointer'><GoBlocked /></button>
            </div>
            <div>
                <button className='text-2xl cursor-pointer'><FaUserNinja /> </button>
            </div>
            </div>
    </div>
  )
}

export default FriendItem