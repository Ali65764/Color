import React from 'react'
import { ROUTER } from "../constant/router"
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
export default function NavBar() {
    const {pathname}=useLocation();


  return (
    <>
    <div className='flex justify-center text-3xl p-6 bg-white group font-bold'>
        <div className='mr-12'>
            <Link to={ROUTER.Home} className={`${pathname === ROUTER.Home  ? "text-red-500 hover:text-blue-800 duration-700": "text-blue-800 hover:text-red-500 duration-700"}`}>Home</Link>
        </div>
        <div className=''>
            <Link to={ROUTER.Color} className={`${pathname === ROUTER.Color  ? "text-red-500 hover:text-blue-800 duration-700": "text-blue-800 hover:text-red-500 duration-700"}`}>Add Color</Link>
        </div>
    </div>
    </>
  )
}
