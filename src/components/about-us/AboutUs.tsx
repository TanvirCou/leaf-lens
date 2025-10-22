import { lobsterFont } from '@/utils/font'
import Image from 'next/image'
import React from 'react'

const AboutUs = () => {
    return (
        <div className='py-10 px-8 md:px-12 lg:px-24 bg-green-950 relative overflow-hidden' id='about'>

            <Image src="/leaf-3.png" alt='' width={150} height={150} className='absolute -top-5 -right-10' />

            <div className='pt-8 flex flex-col items-center'>
                <p className={`${lobsterFont.className} text-yellow-500 text-2xl md:text-3xl lg:text-4xl`}>About Us</p>
                <p className='text-sm pt-2'>Follow instruction for more</p>

                <div className='flex flex-col md:flex-row items-center gap-6 pt-8'>
                    <div className='w-full md:w-1/2 flex items-center justify-center'>
                        <Image src="/plant-1.png" alt='' height={300} width={300} />
                    </div>
                    <div className='w-full md:w-1/2 flex flex-col gap-4'>
                        <p className='text-xl md:text-2xl lg:text-3xl font-medium'>
                            Make your <span className="text-yellow-500">organic</span>  <br />
                            garden
                        </p>
                        <p className={lobsterFont.className}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis ratione rem maxime veniam cum libero voluptas tempora aut saepe similique, eos corporis. Expedita culpa consequatur animi deleniti ullam adipisci iure sequi dolores modi aliquam laudantium,
                            explicabo nobis quia id reprehenderit.?</p>
                    </div>
                </div>

                <div className='flex flex-col md:flex-row-reverse items-center gap-6 pt-8'>
                    <div className='w-full md:w-1/2 flex items-center justify-center'>
                        <Image src="/plant-2.png" alt='' height={300} width={300} />
                    </div>
                    <div className='w-full md:w-1/2 flex flex-col gap-4'>
                        <p className='text-xl md:text-2xl lg:text-3xl font-medium'>
                            Come with us <br />
                            <span className="text-yellow-500">grow up </span>
                            your plant
                        </p>
                        <p className={lobsterFont.className}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis ratione rem maxime veniam cum libero voluptas tempora aut saepe similique, eos corporis. Expedita culpa consequatur animi deleniti ullam adipisci iure sequi dolores modi aliquam laudantium,
                            explicabo nobis quia id reprehenderit.?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs