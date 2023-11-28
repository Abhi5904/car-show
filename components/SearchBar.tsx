'use client'
import React, { useState } from 'react'
import { SearchManufacturer } from '.'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
const SearchButton = ({ otherClass }: { otherClass: string }) => (
    <button type='submit' className={`-ml-3 z-10 ${otherClass}`}>
        <Image
            src={'/magnifying-glass.svg'}
            alt='magnifying glass'
            width={40}
            height={40}
        />
    </button>
)
const SearchBar = () => {
    const [manufacturer, setManufacturer] = useState('')
    const [model, setModel] = useState('')
    const router = useRouter()

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (manufacturer.trim() === "" && model.trim() === "") {
            return alert("Please provide some input");
        }
        updateSearchParams(model.toLowerCase(),manufacturer.toLowerCase())
    }

    const updateSearchParams = (model: string, manufacturer: string) => {
        const searchParams = new URLSearchParams(window.location.search);

        if (model) {
            searchParams.set("model", model);
        } else {
            searchParams.delete("model");
        }

        if (manufacturer) {
            searchParams.set("manufacturer", manufacturer);
        } else {
            searchParams.delete("manufacturer");
        }

        const newPath = `${window.location.pathname}?${searchParams.toString()}`
        router.push(newPath)
    }
    return (
        <form action="" onSubmit={handleSearch} className='w-full flex flex-col sm:flex-row space-y-2 sm:space-x-2 sm:space-y-0'>
            <div className='flex flex-1'>
                <SearchManufacturer
                    manufacturer={manufacturer}
                    setManufacturer={setManufacturer}
                />
                <SearchButton otherClass='sm:hidden' />
            </div>
            <div className='flex-1 flex items-center bg-gray-100 rounded-full'>
                <Image
                    src={'/model-icon.png'}
                    alt='model icon'
                    width={25}
                    height={25}
                    className='w-[20px] h-[20px] ml-2 mr-2'
                />
                <input
                    type="text"
                    name='model'
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                    className='flex-1 bg-gray-100 rounded-full focus:outline-none'
                    placeholder='Search..' />
                <SearchButton otherClass='sm:hidden' />
            </div>
            <SearchButton otherClass='max-sm:hidden' />
        </form>
    )
}

export default SearchBar
