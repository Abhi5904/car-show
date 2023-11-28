'use client'
import { SearchBarManufacturerProps } from '@/types'
import { Fragment, useState } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { manufacturers } from '@/constants'
import Image from 'next/image'

const SearchManufacturer = ({ manufacturer, setManufacturer }: SearchBarManufacturerProps) => {
    const [query, setQuery] = useState('')

    const filterManufacturer = query === ""
        ? manufacturers
        : manufacturers.filter((item) => (
            item.toLowerCase().replace(/\s+/, '').includes(query.toLowerCase().replace(/\s+/, ''))
        ))

    return (
        <div className='bg-gray-100 rounded-full flex-1'>
            <Combobox value={manufacturer} onChange={setManufacturer}>
                <div className='flex items-center space-x-2 leading-10 relative pl-2'>
                    <Combobox.Button>
                        <Image
                            src="/car-logo.svg"
                            alt='car logo'
                            width={20}
                            height={20} />
                    </Combobox.Button>
                    <Combobox.Input className={'bg-gray-100 flex-1 rounded-full focus:outline-none hover:outline-none active:outline-none'}
                        placeholder='Search...' displayValue={(manufacturer: string) => manufacturer}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <Transition
                        as={Fragment}
                        leave='transition ease-in duration-100'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                        afterLeave={() => setQuery('')}
                    >
                        <Combobox.Options className={'absolute  right-0 top-[2.09rem] bg-gray-200 space-y-2 w-full overflow-y-scroll h-[200px] z-20'}>
                            {filterManufacturer.length === 0 && query !== '' ? (
                                <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                                    Nothing found.
                                </div>
                            ) : (
                                filterManufacturer.map((item) => (
                                    <Combobox.Option
                                        key={item} value={item}
                                        className={({ active }) =>
                                            `px-5  ${active ? "bg-blue-500 text-white" : "text-gray-900"
                                            }`
                                        }>
                                        {({ selected, active }) => (
                                            <>
                                                <span
                                                    className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                        }`}
                                                >
                                                    {item}
                                                </span>
                                                {selected ? (
                                                    <span
                                                        className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'text-teal-600'
                                                            }`}
                                                    >
                                                    </span>
                                                ) : null}
                                            </>
                                        )}
                                    </Combobox.Option>
                                ))
                            )}
                        </Combobox.Options>

                    </Transition>
                </div>
            </Combobox>
        </div>
    )
}

export default SearchManufacturer
