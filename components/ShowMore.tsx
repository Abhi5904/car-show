'use client'
import React from 'react'
import { CustomButton } from '.'
import { useRouter } from 'next/navigation'
import { updateSearchParams } from '@/utils'

const ShowMore = ({pageNumber,isNext}:{pageNumber:number,isNext:boolean}) => {
    const router = useRouter()
    const handleNavigation = ()=>{
        const newLimit = (pageNumber+1)*10
        const newPAthName = updateSearchParams("limit",`${newLimit}`)
        router.push(newPAthName)
    }
  return (
    <div className='w-full flex justify-center items-center mt-10'>
        {!isNext && <CustomButton title='Show More' containerStyles='bg-blue-500 text-white rounded-full px-4 py-1 border-[1px] hover:border-blue-500 hover:text-blue-500 hover:bg-white font-medium' handleClick={handleNavigation}/>}
    </div>
  )
}

export default ShowMore
