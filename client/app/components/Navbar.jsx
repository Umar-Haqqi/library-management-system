"use client"

import { LogOutIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Navbar() {
    let username = 'username'
    const handleLogout = () => { };

    return (
        <div className='w-full flex justify-between items-center px-8 h-[70px] bg-sky-900 text-white'>
            <div>
                <h1 className='text-2xl font-semibold'><Link href="/">LMS</Link></h1>
            </div>
            <div className='flex gap-5'>
                <p>{username}</p>
                <button onClick={handleLogout}><LogOutIcon /></button>
            </div>
        </div>
    )
}

export default Navbar
