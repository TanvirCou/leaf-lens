import { lobsterFont } from '@/utils/font'
import { RiCustomerService2Line, RiMoneyDollarCircleLine, RiPlantLine, RiTruckLine } from '@remixicon/react'
import React from 'react'

const Services = () => {
    return (
        <div className='py-10 px-8 md:px-12 lg:px-24 bg-white text-green-950'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                <div className='border border-green-950 w-fit flex flex-col gap-3 rounded-md p-4 hover:-translate-y-3 hover:shadow-md duration-500'>
                    <div className='flex items-center gap-5'>
                        <RiTruckLine size={30} className=' text-green-950' />
                        <p className='md:text-lg font-bold'>Fast <br /> Delivery</p>
                    </div>
                    <p className={lobsterFont.className}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, facere debitis omnis</p>
                </div>

                <div className='border border-green-950 w-fit flex flex-col gap-3 rounded-md p-4 hover:-translate-y-3 hover:shadow-md duration-500'>
                    <div className='flex items-center gap-5'>
                        <RiCustomerService2Line size={30} className=' text-green-950' />
                        <p className='md:text-lg font-bold'>Great Customer <br /> Service</p>
                    </div>
                    <p className={lobsterFont.className}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, facere debitis omnis</p>
                </div>

                <div className='border border-green-950 w-fit flex flex-col gap-3 rounded-md p-4 hover:-translate-y-3 hover:shadow-md duration-500'>
                    <div className='flex items-center gap-5'>
                        <RiPlantLine size={30} className=' text-green-950' />
                        <p className='md:text-lg font-bold'>Original <br /> Plants</p>
                    </div>
                    <p className={lobsterFont.className}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, facere debitis omnis</p>
                </div>

                <div className='border border-green-950 w-fit flex flex-col gap-3 rounded-md p-4 hover:-translate-y-3 hover:shadow-md duration-500'>
                    <div className='flex items-center gap-5'>
                        <RiMoneyDollarCircleLine size={30} className=' text-green-950' />
                        <p className='md:text-lg font-bold'>Affordable <br /> Price</p>
                    </div>
                    <p className={lobsterFont.className}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, facere debitis omnis</p>
                </div>
            </div>
        </div>
    )
}

export default Services