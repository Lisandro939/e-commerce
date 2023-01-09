'use client'

import React, {useState} from 'react'
import Image from 'next/image'
import FirstImage from '../../public/images/image-product-1.jpg'
import SecondImage from '../../public/images/image-product-2.jpg'
import ThirdImage from '../../public/images/image-product-3.jpg'
import FourthImage from '../../public/images/image-product-4.jpg'


export default function AbsoluteImages({setClickedImage}) {

    const [selectedImage, setSelectedImage ] = useState(FirstImage)

    const [styleFirst, setStyleFirst ] = useState('')
    const [styleSecond, setStyleSecond ] = useState('')
    const [styleThird, setStyleThird ] = useState('')
    const [styleFourth, setStyleFourth ] = useState('')

    const principalImage = ' brightness-125 contrast-75 border-2 border-orange-900'
    const secondaryImage = ' hover:brightness-125 hover:contrast-50'

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
            fourthImageStyle()
        } else if (selectedImage === SecondImage) {
            firstImageStyle()
        } else if (selectedImage === ThirdImage) {
            secondImageStyle()
        } else if (selectedImage === FourthImage) {
            thirdImageStyle()
        }
    }

    function next () {
        if (selectedImage === FirstImage) {
            secondImageStyle()
        } else if (selectedImage === SecondImage) {
            thirdImageStyle()
        } else if (selectedImage === ThirdImage) {
            fourthImageStyle()
        } else if (selectedImage === FourthImage) {
            firstImageStyle()
        }
    }
  return (
    <div className='z-[1] absolute flex justify-center items-center m-auto top-0 left-0 right-0 w-[100vw] h-[100vh] bg-black bg-opacity-30 sm:hidden'>
        <div className='flex flex-col justify-center items-center w-[40vw] h-screen sm:w-max pt-0 h-fit visible'>
            <button 
            className='w-[70%] mb-2 flex justify-end'
            onClick={() => setClickedImage('hidden')}
            >
                <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#D35100" fillRule="evenodd"/></svg>
            </button>
            <div className='static flex justify-center items-center sm:w-screen'>
                <button 
                className='bg-white mr-[-20px] px-4 py-3 rounded-full z-20'
                onClick={() => previous()}
                >
                    <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
                </button>
                <Image className='object-cover rounded-lg sm:rounded-none z-10' src={selectedImage} alt='' width={400} height={400}/>
                <button 
                className='bg-white ml-[-20px] px-4 py-3 rounded-full z-20'
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
    </div>
  )
}
