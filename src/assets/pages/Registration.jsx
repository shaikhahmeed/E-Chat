import React from 'react'
import { FcGoogle } from "react-icons/fc";

const Registration = () => {
  return (
<div className="w-full max-w-full py-3 sm:max-w-xl sm:mx-auto shadow-xl mt-0 md:flex-0 shrink-0">
  <div className="relative z-0 flex flex-col min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
    <div className="p-6 mb-0 text-center bg-white border-b-0 rounded-t-2xl">
      <h5 className="text-xl font-bold">Register with</h5>
    </div>
    <div>
    <button
            class="flex gap-2 items-center justify-center py-1 px-15 bg-white hover:bg-gray-200 focus:ring-blue-500 focus:ring-offset-blue-200 text-gray-700 w-full transition ease-in duration-200 text-center text-base font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg mt-4">
        <p><FcGoogle /></p>
        <span class="ml-2"> Google</span>
    </button>
    </div>
    <div className="flex -mx-3 px-12">
      <div className="relative w-full max-w-full px-3 mt-2 text-center shrink-0">
        <p className="z-20 inline px-4 mb-2 font-semibold leading-normal bg-white text-sm text-slate-400">or</p>
      </div>
    </div>
    <div className="flex-auto p-6">
      <form role="form text-left">
        <div className="mb-4">
          <input aria-describedby="email-addon" aria-label="Name" placeholder="Full Name " className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow" type="text"/>
        </div>
        <div className="mb-4">
          <input aria-describedby="email-addon" aria-label="Email" placeholder="Email" className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow" type="email"/>
        </div>
        <div className="mb-4">
          <input aria-describedby="password-addon" aria-label="Password" placeholder="Password" className="text-sm focus:shadow-soft-primary-outline leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding py-2 px-3 font-normal text-gray-700 transition-all focus:border-fuchsia-300 focus:bg-white focus:text-gray-700 focus:outline-none focus:transition-shadow" type="password"/>
        </div>
        <div className="min-h-6 pl-7 mb-0.5 block">
  </div>
    <div className="text-center">
        <button className="inline-block w-full px-6 py-3 mt-6 mb-2 font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer active:opacity-85 hover:scale-102 hover:shadow-soft-xs leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 bg-gradient-to-tl from-gray-900 to-slate-800 hover:border-slate-700 hover:bg-slate-700 hover:text-white" type="button">Sign up</button>
    </div>
    <p className="mt-4 mb-0 leading-normal text-sm">Already have an account? <a className="font-bold text-slate-700" href="../pages/sign-in.html">Sign in</a></p>
     </form>
    </div>
  </div>
</div>
  )
}

export default Registration