import { font } from '@/app/layout'
import { RiShoppingCart2Fill, RiStarFill, RiStarHalfFill, RiStarLine } from '@remixicon/react'
import Image from 'next/image'
import React from 'react'

const Popular = () => {
    return (
        <div className='py-10 px-8 md:px-12 lg:px-24 bg-green-900' id='popular'>


            <div className='pt-8 flex flex-col items-center'>
                <p className={`${font.lobsterFont.className} text-yellow-500 text-2xl md:text-3xl lg:text-4xl`}>Your Choice Plant</p>
                <p className='text-sm pt-2'>Follow instruction for more</p>

                <div className='mt-36 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-40'>
                    <div className='bg-green-950 px-10 pt-24 pb-6 rounded-md relative'>
                        <Image src="/cart-1.png" alt='' height={250} width={250} className='absolute -top-5 hover:-top-8 duration-300 left-1/2 -translate-x-1/2 -translate-y-1/2' />

                        <p className='italic text-sm'>Nephrolepis exaltata</p>
                        <p className='text-xl md:text-2xl '>Boston Fern</p>

                        <div className='flex items-center gap-2 text-yellow-500 py-2'>
                            <RiStarFill size={16} />
                            <RiStarFill size={16} />
                            <RiStarHalfFill size={16} />
                            <RiStarLine size={16} />
                            <RiStarLine size={16} />
                        </div>

                        <div className='flex items-center justify-between'>
                            <p className='text-2xl'>$5</p>

                            <button className='bg-yellow-500 p-2 rounded-md cursor-pointer'>
                                <RiShoppingCart2Fill size={20} />
                            </button>
                        </div>
                    </div>

                    <div className='bg-green-950 px-10 pt-24 pb-6 rounded-md relative'>
                        <Image src="/cart-2.png" alt='' height={250} width={250} className='absolute -top-5 hover:-top-8 duration-300 left-1/2 -translate-x-1/2 -translate-y-1/2' />

                        <p className='italic text-sm'>Ficus elastica</p>
                        <p className='text-xl md:text-2xl '>Rubber Plant</p>

                        <div className='flex items-center gap-2 text-yellow-500 py-2'>
                            <RiStarFill size={16} />
                            <RiStarFill size={16} />
                            <RiStarHalfFill size={16} />
                            <RiStarLine size={16} />
                            <RiStarLine size={16} />
                        </div>

                        <div className='flex items-center justify-between'>
                            <p className='text-2xl'>$5</p>

                            <button className='bg-yellow-500 p-2 rounded-md cursor-pointer'>
                                <RiShoppingCart2Fill size={20} />
                            </button>
                        </div>
                    </div>

                    <div className='bg-green-950 px-10 pt-24 pb-6 rounded-md relative'>
                        <Image src="/cart-3.png" alt='' height={250} width={250} className='absolute -top-5 hover:-top-8 duration-300 left-1/2 -translate-x-1/2 -translate-y-1/2' />

                        <p className='italic text-sm'>Spathiphyllum wallisii</p>
                        <p className='text-xl md:text-2xl '>Peace Lily</p>

                        <div className='flex items-center gap-2 text-yellow-500 py-2'>
                            <RiStarFill size={16} />
                            <RiStarFill size={16} />
                            <RiStarHalfFill size={16} />
                            <RiStarLine size={16} />
                            <RiStarLine size={16} />
                        </div>

                        <div className='flex items-center justify-between'>
                            <p className='text-2xl'>$5</p>

                            <button className='bg-yellow-500 p-2 rounded-md cursor-pointer'>
                                <RiShoppingCart2Fill size={20} />
                            </button>
                        </div>
                    </div>

                    <div className='bg-green-950 px-10 w-full pt-24 pb-6 rounded-md relative'>
                        <Image src="/cart-4.png" alt='' height={250} width={250} className='absolute -top-5 hover:-top-8 duration-300 left-1/2 -translate-x-1/2 -translate-y-1/2' />

                        <p className='italic text-sm'>Adenium obesum</p>
                        <p className='text-xl md:text-2xl '>Desert Rose</p>

                        <div className='flex items-center gap-2 text-yellow-500 py-2'>
                            <RiStarFill size={16} />
                            <RiStarFill size={16} />
                            <RiStarHalfFill size={16} />
                            <RiStarLine size={16} />
                            <RiStarLine size={16} />
                        </div>

                        <div className='flex items-center justify-between'>
                            <p className='text-2xl'>$5</p>

                            <button className='bg-yellow-500 p-2 rounded-md cursor-pointer'>
                                <RiShoppingCart2Fill size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Popular