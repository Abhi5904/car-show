'use client'
import Image from 'next/image'
import React from 'react'
import { CustomButton } from '.'

const Navbar = () => {
    const handleAuth = () => {

    }

    return (
        <div className='flex justify-between items-center pt-6 px-10'>
            <div>
                <Image src={'/logo.svg'} alt='logo' width={100} height={150} />
            </div>
            <CustomButton title='Sign In' containerStyles='bg-blue-500 text-white rounded-full px-4 py-1 border-[1px] hover:border-blue-500 hover:text-blue-500 hover:bg-white font-medium' btnType='button' handleClick={handleAuth}/>
        </div>
    )
}

export default Navbar
