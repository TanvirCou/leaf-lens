import Image from 'next/image'
import React from 'react'
import Slider from './Slider'
import { lobsterFont } from '@/utils/font'

const Review = () => {

    return (
        <div className='py-10 pb-20 px-8 md:px-12 lg:px-24 bg-green-950 relative overflow-hidden' id='review'>

            <Image src="/leaf-4.png" alt='' width={150} height={150} className='absolute -top-5 -left-10' />


            <div className='pt-8 flex flex-col items-center'>
                <p className={`${lobsterFont.className} text-yellow-500 text-2xl md:text-3xl lg:text-4xl`}>
                    Customer Review</p>
                <p className='text-sm pt-2'>Follow instruction for more</p>

                <Slider />

            </div>

        </div>
    )
}

export default Review