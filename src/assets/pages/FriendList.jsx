import React from 'react'
import FriendItem from '../../component/FriendItem'
import { LuUserSearch } from "react-icons/lu";

const FriendList = () => {
  return (
    <>
   <div className='m-auto w-96'>
           <div className='flex text-4xl font-semibold justify-center my-8 text-pink-600'>
           <h2>Friend List</h2>
           </div>
           <div className='px-6 py-3.5 flex gap-2'>
               <input type="text" className='px-4 py-3 rounded-2xl border-2 border-red-600' placeholder='Search'/>
               <p className='px-4 py-3.5 cursor-pointer rounded-2xl border-2 border-red-600'><LuUserSearch/></p>
           </div>
    </div>
    <div className='m-auto flex flex-col items-center justify-between w-2/5 shadow-2xl overflow-y-auto h-96'>
    <FriendItem/>
    <FriendItem/>
    <FriendItem/>
    <FriendItem/>
    <FriendItem/>
    </div>
    </>
  )
}

export default FriendList