import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='flex flex-wrap pt-10 gap-12 w-[80%] md:w-full mx-auto text-gray-500'>
        <div className='flex flex-1 flex-col items-center space-y-3'>
            <Link href={'/'}>
            <Image src={'/logo.svg'} alt='logo' width={100} height={100}/></Link>
            <p>
                Carhub 2023 <br />
                All Rights Reserved@
            </p>
        </div>
        <div className='flex flex-1 items-center flex-col space-y-2'>
            <p className='font-bold text-lg text-black'>About</p>
            <Link href={'/about'}>How it work</Link>
            <Link href={'/about'}>Fetured</Link>
            <Link href={'/about'}>partnership</Link>
            <Link href={'/about'}>contact</Link>
        </div>
        <div className='flex items-center flex-1 flex-col space-y-2'>
            <p className='font-bold text-lg text-black'>Compony</p>
            <Link href={'/compony'}>Event</Link>
            <Link href={'/compony'}>Blog</Link>
            <Link href={'/compony'}>Product</Link>
            <Link href={'/compony'}>Invite friend</Link>
        </div>
        <div className='flex items-center flex-1 flex-col space-y-2'>
            <p className='font-bold text-lg text-black'>Socials</p>
            <Link href={'/discord'}>Discord</Link>
            <Link href={'/instagram'}>Instagram</Link>
            <Link href={'/facebook'}>Facebook</Link>
            <Link href={'/twitter'}>Twitter</Link>
        </div>
    </div>
    <div className='flex justify-evenly mt-5 text-gray-500 cursor-pointer'>
        <p>@2023 CarHub. All Rights Reserved</p> 
        <p>Privacy Policy</p>
        <p>Terms of Use</p>
        </div>
    </>
  )
}

export default Footer
