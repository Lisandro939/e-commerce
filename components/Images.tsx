'use client'

import Image from 'next/image'
import React from 'react'
import FirstImage from '../public/images/image-product-1.jpg'
import SecondImage from '../public/images/image-product-2.jpg'
import ThirdImage from '../public/images/image-product-3.jpg'
import FourthImage from '../public/images/image-product-4.jpg'


export default function Images() {
  return (
    <div className='flex flex-col justify-center items-center sm:w-[100vw] h-screen sm:w-max pt-0 h-fit visible'>
        <div className='static flex justify-center items-center sm:w-screen'>
            <Image className='object-cover rounded-lg sm:rounded-none' src={FirstImage} alt='' width={400} height={400}/>
        </div>
        <div className='flex flex-row justify-around items-center w-3/4 h-16 px-2 gap-10 mt-4 sm:hidden'>
            <Image className='rounded-lg' alt='' src={FirstImage} width={70} height={50}/>
            <Image className='rounded-lg' alt='' src={SecondImage} width={70} height={50}/>
            <Image className='rounded-lg' alt='' src={ThirdImage} width={70} height={50}/>
            <Image className='rounded-lg' alt='' src={FourthImage} width={70} height={50}/>
        </div>
    </div>
  )
}
