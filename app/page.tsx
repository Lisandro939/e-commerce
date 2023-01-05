import React from 'react'
import Details from '../components/Details'
import Header from '../components/Header'
import Images from '../components/Images'

export default function page() {
  return (
    <div className='w-screen h-screen flex flex-col justify-start items-center sm:gap-10'>
        <Header />
        <div className='max-w-6xl w-screen h-full flex flex-row sm:flex-col justify-center items-start gap-20 sm:gap-8'>
          <Images />
          <Details />
        </div>
    </div>
  )
}
