'use client'
import { CarProps } from '@/types'
import { calculateCarRent } from '@/utils'
import Image from 'next/image'
import React, { useState } from 'react'
import { CarDetail, CustomButton } from '.'

interface CarCardProps {
    car: CarProps
}
const CarCard = ({ car }: CarCardProps) => {
    const { city_mpg, year, make, model, transmission, drive } = car

    const [isOpen,setIsOpen] = useState(false)
    const handleClsoeButton = ()=>{
        setIsOpen(false)
    }
    const carRent = calculateCarRent(city_mpg, year)
    return (
        <div className='rounded-xl bg-blue-100 hover:bg-white hover:shadow-xl cursor-pointer p-5 my-5'>
            <div>
                <h2 className='capitalize font-semibold text-xl'>{make} {model}</h2>
            </div>
            <p className='flex mt-6 text-[32px] leading-[38px] font-extrabold'>
                <span className='self-start text-[14px] leading-[17px] font-semibold'>$</span>
                {carRent}
                <span className='self-end text-[14px] leading-[17px] font-medium'>/day</span>
            </p>
            <div className='relative w-full h-40 object-contain my-3'>
                <Image src={'/hero.png'} alt='car model' fill priority className='object-contain' />
            </div>
            <div className="relative flex w-full mt-2 items-center group">
                <div className="flex w-full justify-center group-hover:invisible text-gray-600">
                    <div className="flex flex-col justify-center items-center gap-2">
                        <Image src={'/steering-wheel.svg'} alt='steering wheel' width={20} height={20}/>
                        <p className='text-[14px]'>{transmission === 'a'?'Automatic':'Manual'}</p>
                    </div>
                </div>
                <div className="flex w-full justify-center group-hover:invisible text-gray-600">
                    <div className="flex flex-col justify-center items-center gap-2">
                        <Image src={'/tire.svg'} alt='tire' width={20} height={20}/>
                        <p className='text-[14px]'>{drive?.toUpperCase()}</p>
                    </div>
                </div>
                <div className="flex w-full justify-center group-hover:invisible text-gray-600">
                    <div className="flex flex-col justify-center items-center gap-2">
                        <Image src={'/gas.svg'} alt='gas' width={20} height={20}/>
                        <p className='text-[14px]'>{city_mpg} MPG</p>
                    </div>
                </div>
                <div className='hidden group-hover:flex absolute bottom-0 w-full z-10'>
                    <CustomButton
                    title='View More'
                    containerStyles='w-full py-[5px] rounded-full bg-blue-500'
                    textStyle='text-white text-[14px] leading-[17px] font-bold'
                    rightIcon='/right-arrow.svg'
                    handleClick={()=>setIsOpen(true)}
                    />
                </div>
            </div>
            <CarDetail car={car} isOpen={isOpen} handleClsoeButton={handleClsoeButton}/>
        </div>
    )
}

export default CarCard
