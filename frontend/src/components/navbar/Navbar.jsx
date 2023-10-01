import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import {FaBars, FaTimes} from 'react-icons/fa'

function Navbar() {
    const [open,setOpen]=useState(false);
  return (
    <div className='bg-purple-800 shadow-md w-full top-0 left-0'>
        <div className='md:flex items-center justify-between bg-purple py-4 md:px-10 px-7'>
            <div className='font-bold text-2x1 cursor-pointer flex items-center font-[Poppins] text-pink'>
                <span className='text-3x1 text-blue-600 mr-1 pt-2'>!</span>
                Dumper
            </div>
            <div onClick={() => setOpen(!open)}className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                { open ? <FaTimes /> : <FaBars /> }
            </div>
            <ul className={`md:flex md:items-center md:pb-0 pb-12 md:static absolute bg-purple md:z-auto z-index[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-16 ':'top-[-496px]'}`}>
                <li className='md:ml-8 text-xl md:my-0 my-7'>
                    <Link className='text-gray-600 hover:text-pink duration-500' to={'/post'}>Home</Link>
                </li>

                <li className='md:ml-8 text-xl md:my-0 my-7'>
                    <Link className='text-gray-600 hover:text-pink duration-500' to={'/post/upload'}>Create</Link>
                </li>

                <li className='md:ml-8 text-xl md:my-0 my-7'>
                    <Link className='text-gray-600 hover:text-pink duration-500' to={'/'}>SearchBar</Link>
                </li>

                <li className='md:ml-8 text-xl md:my-0 my-7'>
                    <Link className='text-gray-600 hover:text-pink duration-500' to={'/'}>Profile</Link>
                </li>
                <Link to={'/login'}>
                    <Button>Sing In</Button>
                </Link>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
