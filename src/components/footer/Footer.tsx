import { font } from '@/app/layout'
import { RiArrowGoBackFill, RiArrowRightBoxFill, RiArrowRightFill, RiArrowUpLine, RiFacebookFill, RiInstagramLine, RiLeafFill, RiLinkedinFill, RiTwitterLine } from '@remixicon/react'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <div className='py-16 px-8 md:px-12 lg:px-24 bg-yellow-100 relative'>
            <div className='w-full md:w-1/2 opacity-20' >
                <Image src="/floral-1.png" alt='' fill />
            </div>
            <div className='bg-green-900 rounded-md space-y-3 p-6 absolute top-0 left-0 right-0 w-[80%] md:w-[40%] mx-auto -translate-y-1/2'>
                <p className='text-xl md:text-2xl'><span className="text-yellow-500">Subscribe</span> to our newsletter
                    Subscribe</p>

                <div className='flex flex-col  md:flex-row gap-2'>
                    <input type="email" placeholder='Enter your email' className='bg-white w-full outline-none text-gray-700 font-medium text-sm p-2 rounded-md' />
                    <button className='flex items-center px-4 py-2 bg-green-950 rounded-md gap-1 w-fit'>
                        Subscribe
                        <RiArrowRightFill size={18} />
                    </button>
                </div>
            </div>

            <div className='border-b-2 border-green-500 mt-16 md:mt-8  w-[80%] md:w-[40%] mx-auto relative'>
                <div className='flex items-center gap-3 absolute top-0 left-0 right-0 mx-auto bg-yellow-100 w-fit px-4 -translate-y-1/2'>
                    <RiFacebookFill size={20} className='hover:text-yellow-500 text-black cursor-pointer duration-300' />
                    <RiTwitterLine size={20} className='hover:btextg-yellow-500 text-black cursor-pointer duration-300' />
                    <RiInstagramLine size={20} className='hover:text-yellow-500 text-black cursor-pointer duration-300' />
                    <RiLinkedinFill size={20} className='hover:text-yellow-500 text-black cursor-pointer duration-300' />
                </div>

            </div>

            <div className='text-black text-center md:text-start mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-6'>
                <div className='flex flex-col items-center md:items-baseline'>
                    <div className=' flex flex-col items-center'>
                        <RiLeafFill size={55} className='text-green-700 ' />
                        <p className={`${font.lobsterFont.className} text-2xl text-green-700`}>LeafLens</p>
                    </div>
                </div>

                <div className='flex flex-col gap-3'>
                    <p className='text-lg font-bold'>Quick Link</p>
                    <div className='flex flex-col gap-0.5'>
                        <p>Plants</p>
                        <p>Flowers</p>
                        <p>Gerdening</p>
                        <p>Seeds</p>
                        <p>Shipping</p>
                    </div>
                </div>

                <div className='flex flex-col gap-3'>
                    <p className='text-lg font-bold'>Popular Services</p>
                    <div className='flex flex-col gap-0.5'>
                        <p>Tree Planting</p>
                        <p>Grass Cutting</p>
                        <p>Weeds Control</p>
                        <p>Project</p>
                    </div>
                </div>

                <div className='flex flex-col gap-3'>
                    <p className='text-lg font-bold'>Contact Us</p>
                    <div className='flex flex-col gap-0.5'>
                        <p>+88 333 78 901</p>
                        <p>ahmed.tnvr999@gmail.com</p>
                        <p className='mt-3'>1234 Tailwind Ave, CSS City, Webland 56789, USA</p>
                    </div>
                </div>
            </div>

            <p className='text-gray-700 mt-10 text-sm text-center'>Copyright &copy; 2024 LightCode. All rights reserved.</p>

            <a href="#" className='bg-yellow-500 p-2 rounded-md absolute bottom-4 right-4 hover:-translate-y-1 duration-300'>
                <RiArrowUpLine size={20} color='white' />
            </a>
        </div>
    )
}

export default Footer