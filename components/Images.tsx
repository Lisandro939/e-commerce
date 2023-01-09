'use client'

import Image from 'next/image'
import React, {useState} from 'react'
import FirstImage from '../public/images/image-product-1.jpg'
import SecondImage from '../public/images/image-product-2.jpg'
import ThirdImage from '../public/images/image-product-3.jpg'
import FourthImage from '../public/images/image-product-4.jpg'
import AbsoluteImages from './images components/AbsoluteImages'


export default function Images() {

  const [clickedImage, setClickedImage] = useState('hidden')

  const [selectedImage, setSelectedImage ] = useState(FirstImage)

  const [styleFirst, setStyleFirst ] = useState('')
  const [styleSecond, setStyleSecond ] = useState('')
  const [styleThird, setStyleThird ] = useState('')
  const [styleFourth, setStyleFourth ] = useState('')

  const principalImage = ' opacity-30 border-2 border-orange-900'
  const secondaryImage = ' hover:opacity-70'

  const firstImageStyle = () => {
    setSelectedImage(FirstImage)
    setStyleFirst(principalImage)
    setStyleSecond(secondaryImage)
    setStyleThird(secondaryImage)
    setStyleFourth(secondaryImage)
  }

  const secondImageStyle = () => {
    setSelectedImage(SecondImage)
    setStyleFirst(secondaryImage)
    setStyleSecond(principalImage)
    setStyleThird(secondaryImage)
    setStyleFourth(secondaryImage)
  }

  const thirdImageStyle = () => {
    setSelectedImage(ThirdImage)
    setStyleFirst(secondaryImage)
    setStyleSecond(secondaryImage)
    setStyleThird(principalImage)
    setStyleFourth(secondaryImage)
  }

  const fourthImageStyle = () => {
    setSelectedImage(FourthImage)
    setStyleFirst(secondaryImage)
    setStyleSecond(secondaryImage)
    setStyleThird(secondaryImage)
    setStyleFourth(principalImage)
  }

  function previous () {
    if (selectedImage === FirstImage) {
      setSelectedImage(FourthImage)
    } else if (selectedImage === SecondImage) {
      setSelectedImage(FirstImage)
    } else if (selectedImage === ThirdImage) {
      setSelectedImage(SecondImage)
    } else if (selectedImage === FourthImage) {
      setSelectedImage(ThirdImage)
    }
  }

  function next () {
    if (selectedImage === FirstImage) {
      setSelectedImage(SecondImage)
    } else if (selectedImage === SecondImage) {
      setSelectedImage(ThirdImage)
    } else if (selectedImage === ThirdImage) {
      setSelectedImage(FourthImage)
    } else if (selectedImage === FourthImage) {
      setSelectedImage(FirstImage)
    }
}

  return (
    <>
    <div className={clickedImage}>
      <AbsoluteImages
      setClickedImage={setClickedImage}
      />
    </div>
    <div className='flex flex-col justify-center items-center sm:w-[100vw] h-screen sm:w-max pt-0 h-fit visible'>
        <div 
        className='static flex justify-center items-center  cursor-pointer z-[0] sm:w-[100vw]'
        onClick={() => {
          setClickedImage('')
        }}
        > 
            <button 
            className='hidden bg-white mr-[-60px] px-4 py-3 rounded-full z-20 sm:inline-block'
            onClick={() => previous()}
            >
                <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
            </button>
            <Image 
            className='object-cover rounded-lg sm:rounded-none z-[-1]' 
            src={selectedImage} 
            alt='' 
            width={420} 
            height={400}
            />
            <button 
            className='hidden bg-white ml-[-60px] px-4 py-3 rounded-full z-20 sm:inline-block'
            onClick={() => next()}
            >
                <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
            </button>
        </div>
        <div className='flex flex-row justify-around items-center w-3/4 h-16 px-2 gap-10 mt-4 sm:hidden'>
            <Image 
            className={'rounded-lg cursor-pointer' + styleFirst}
            alt='' 
            src={FirstImage} 
            width={70} 
            height={50}
            onClick={() => {firstImageStyle()}}
            />
            <Image 
            className={'rounded-lg cursor-pointer' + styleSecond}
            alt='' 
            src={SecondImage} 
            width={70} 
            height={50}
            onClick={() => {secondImageStyle()}}
            />
            <Image 
            className={'rounded-lg cursor-pointer' + styleThird}
            alt='' 
            src={ThirdImage} 
            width={70} 
            height={50}
            onClick={() => {thirdImageStyle()}}
            />
            <Image 
            className={'rounded-lg cursor-pointer' + styleFourth}
            alt='' 
            src={FourthImage} 
            width={70} 
            height={50}
            onClick={() => {fourthImageStyle()}}
            />
        </div>
    </div>
    </>
  )
}
