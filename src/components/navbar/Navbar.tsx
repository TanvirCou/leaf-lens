"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { RiCloseLine, RiMenu4Line } from '@remixicon/react'
import { font } from '@/app/layout'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='px-8 md:px-20 flex items-center h-16 w-full justify-between bg-green-950 fixed z-50 shadow-sm'>
        <p className={`text-xl md:text-3xl ${font.lobsterFont.className}`}>LeafLens</p>

      <div className={`absolute top-0 ${isOpen ? 'left-0' : '-left-[100%]'} duration-300 z-50 min-h-[80vh] w-full max-md:bg-green-950/80 max-md:backdrop-blur-sm flex items-center justify-center md:justify-end overflow-hidden md:static `}>
        <div className='flex flex-col md:flex-row items-center gap-8 font-semibold duration-300'>
          <Link href="/" className='hover:text-yellow-500'>Home</Link>
          <Link href="/" className='hover:text-yellow-500'>About</Link>
          <Link href="/" className='hover:text-yellow-500'>Popular</Link>
          <Link href="/" className='hover:text-yellow-500'>Review</Link>
        </div>

        <div className='md:hidden absolute -right-5 -bottom-5'>
          <Image src="/leaf-1.png" alt="logo" width={100} height={100} />
        </div>

        <div className='md:hidden absolute -left-5 -top-5 rotate-90'>
          <Image src="/leaf-2.png" alt="logo" width={100} height={100} />
        </div>
      
      </div>

      {isOpen ?
       <RiCloseLine
            size={28} // set custom `width` and `height`
            color="white" // set `fill` color
            className="cursor-pointer md:hidden z-90 absolute top-5 right-5" // add custom class name
            onClick={() => setIsOpen(!isOpen)}
        />
      
      : <RiMenu4Line
            size={28} // set custom `width` and `height`
            color="white" // set `fill` color
            className="cursor-pointer md:hidden" // add custom class name
            onClick={() => setIsOpen(!isOpen)}
        />}
    </div>
  )
}

export default Navbar