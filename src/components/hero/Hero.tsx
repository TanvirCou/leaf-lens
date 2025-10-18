import { font } from '@/app/layout'
import { RiFacebookFill, RiFlowerLine, RiInstagramLine, RiLeafLine, RiLinkedinFill, RiPlantLine, RiTwitterFill, RiTwitterLine } from '@remixicon/react'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <div className='pt-20 md:pt-28 px-8 md:px-12 lg:px-24 bg-green-950 relative'>

            <div className='w-64 h-64 bg-green-700 opacity-30 rounded-full blur-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            </div>

            <div className='w-64 h-64 bg-green-700 opacity-30 rounded-full blur-3xl absolute right-0 bottom-0'>
            </div>
            <div className='flex flex-col md:flex-row items-center w-full'>
                <div className='md:w-1/2 flex flex-col gap-8 md:gap-10 lg:gap-12'>
                    <div className='flex flex-col gap-4'>
                        <p className='text-3xl md:text-4xl xl:text-5xl font-bold'> <span className='text-yellow-500'>Plants</span> makes a <br /> positive <span className='text-yellow-500'>imapct</span> on <br /> your environment</p>

                        <p className={font.lobsterFont.className}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio fugiat eveniet, reprehenderit veritatis aut explicabo voluptatum ullam itaque tenetur numquam!</p>
                    </div>

                    <div className='flex flex-col gap-4'>
                        <div className='flex items-center gap-4'>
                            <button className='flex items-center gap-1 px-4 py-2 bg-yellow-500 hover:opacity-90 duration-300 rounded-md cursor-pointer'>
                                <span className='font-medium'>Shop now</span>
                                <RiLeafLine size={20} color="white" />
                            </button>

                            <button className='flex items-center gap-1 px-4 py-2 bg-transparent border border-white hover:bg-yellow-500 hover:border-yellow-500 duration-300 rounded-md cursor-pointer'>
                                <span>Know more</span>
                                <RiLeafLine size={20} color="white" />
                            </button>
                        </div>

                        <p className={`text-sm ${font.lobsterFont.className}`}>You will get 30-days free trial.</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <RiFacebookFill size={20} className='hover:text-yellow-500 cursor-pointer duration-300' />
                        <RiTwitterLine size={20} className='hover:btextg-yellow-500 cursor-pointer duration-300' />
                        <RiInstagramLine size={20} className='hover:text-yellow-500 cursor-pointer duration-300' />
                        <RiLinkedinFill size={20} className='hover:text-yellow-500 cursor-pointer duration-300' />
                    </div>

                </div>

                <div className='md:w-1/2 relative top-12 md:top-0'>
                    <div className='w-full flex items-center justify-center'>
                        <Image src='/home.png' width={400} height={400} alt='' />
                    </div>
                    <RiLeafLine size={40} className='absolute -top-5 right-0 opacity-50 text-yellow-500 moveY' />
                    <RiFlowerLine size={40} className='absolute bottom-0 left-5 opacity-50 text-yellow-500 spin' />
                    <RiPlantLine size={40} className='absolute -top-5 left-5 opacity-50 text-yellow-500 scaleUpDown' />
                </div>
            </div>
        </div>
    )
}

export default Hero