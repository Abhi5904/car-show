'use client'
import { CarDetailProps } from '@/types'
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'
import React, { Fragment } from 'react'

const CarDetail = ({ car, handleClsoeButton, isOpen }: CarDetailProps) => {
    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={handleClsoeButton}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all flex flex-col gap-5">
                                    <button
                                        onClick={handleClsoeButton}
                                        type='button'
                                        className='absolute top-2 right-2 z-10 w-fit p-2 bg-blue-100 rounded-full'>
                                        <Image
                                            src={'/close.svg'}
                                            alt='close'
                                            width={20}
                                            height={20}
                                            className='object-contain' />
                                    </button>
                                    <div className="flex-1 flex flex-col gap-3">
                                        <div className="relative w-full h-40 bg-cover bg-center rounded-lg" style={{background:`url('/pattern.png')`}}>
                                            <Image
                                            src={'/hero.png'}
                                            alt='car'
                                            fill
                                            priority
                                            className='object-contain'
                                            />

                                        </div>
                                        <div className='flex gap-2'>
                                            <div className='flex-1 relative w-full h-24'>
                                                <Image
                                                src={'/hero.png'}
                                                alt='car'
                                                fill
                                                priority
                                                className='object-contain'
                                                />
                                            </div>
                                            <div className='flex-1 relative w-full h-24'>
                                                <Image
                                                src={'/hero.png'}
                                                alt='car'
                                                fill
                                                priority
                                                className='object-contain'
                                                />
                                            </div>
                                            <div className='flex-1 relative w-full h-24'>
                                                <Image
                                                src={'/hero.png'}
                                                alt='car'
                                                fill
                                                priority
                                                className='object-contain'
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex-1 flex flex-col gap-2'>
                                        <h2 className='capitalize text-xl font-semibold'>{car.make} {car.model}</h2>
                                        <div className='flex flex-wrap gap-4 mt-3'>
                                            {Object.entries(car).map(([key,value])=>(
                                                <div className="flex justify-between gap-5 w-full text-right" key={key}>
                                                    <h4>{key}</h4>
                                                    <p>{value}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default CarDetail
