import React from 'react'
import Cart from './details components/Cart'

export default function Details() {

  return (
    <div className='flex flex-col justify-center gap-2 w-1/2 h-96 pt-10 sm:pl-6 sm:w-full'>
        <h4 className='font-black text-sm text-orange-600'>SNEAKER COMPANY</h4>
        <h1 className='text-6xl mb-5 sm:text-3xl'>Fall Limited Edition Sneakers</h1>
        <p className='mb-4'>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber sole, they`ll withstand everything the weather can offer. </p>
        <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between sm:pr-5'>
          <div className='flex flex-row gap-5 items-center'>
              <h2 className='text-2xl'>$125.00</h2>
              <h3 className='text-orange-600'>50%</h3>
          </div>
          <h3 className='line-through text-gray-400'>$250</h3>
        </div>
        
        <Cart />
    </div>
  )
}
