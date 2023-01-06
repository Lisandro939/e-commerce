'use client'

import Image from 'next/image'
import React, {useEffect, useState} from 'react'
import FirstImage from '../../public/images/image-product-1-thumbnail.jpg'
import Delete from '../../public/images/delete.svg'

export default function Cart() {

    const [item, setItem] = useState({
        title: "",
        price: 0,
        numberOfItems: 0
    })

    useEffect(() => {
        console.log(localStorage.getItem('item'))
        const item = JSON.parse(localStorage.getItem('item') || '{"title":""}')
        if (item !== '{"title":"","price":0,"numberOfItems":0}'){
            setItem(item)
        }
        
    },[])

    const [visibility, setVisibility] = useState("hidden") 
  return (
    <div className='flex justify-center'>
        <button
        onClick={() => {
            if (visibility === "hidden") {
                setVisibility("")
            } else {
                setVisibility("hidden")
            }
        }}
        >
            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#69707D" fillRule="nonzero"/>
            </svg>
        </button>
        { item.title === "" ? 
        <div className={'absolute flex flex-col justify-center items-center px-4 pt-4 inset-y-20 h-[200px] w-[300px] shadow-xl shadow-gray-400 bg-white text-black rounded-lg ' + visibility}>
            <h2>Your cart is empty</h2>
        </div>
        : <div className={'absolute flex flex-col px-4 pt-4 inset-y-20 h-[200px] w-[350px] shadow-xl shadow-gray-400 bg-white text-black rounded-lg ' + visibility}>
            <h2 className='border-b-2 border-gray-200 sm:border-b-0'>
                Cart
            </h2>
            <div className='flex flex-col gap-4 justify-center h-[100%]'>
                <div className='flex flex-row gap-2'>
                    <Image className='rounded-lg' alt='' src={FirstImage} width={45} height={20}/>
                    <div className='flex flex-col mr-4'>
                        <p>
                            {item.title}
                        </p>
                        <div className='flex flex-row gap-2'>
                            <p>${item.price} x {item.numberOfItems}</p>
                            <p className='font-black'>${item.price * item.numberOfItems}</p>
                        </div>
                    </div>
                    <button 
                    onClick={() => {
                        localStorage.removeItem('item')
                        window.location.reload()
                    }}
                    className='w-4'>
                        <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 482.428 482.429">
                            <g>
                                <g>
                                    <path d="M381.163,57.799h-75.094C302.323,25.316,274.686,0,241.214,0c-33.471,0-61.104,25.315-64.85,57.799h-75.098
                                        c-30.39,0-55.111,24.728-55.111,55.117v2.828c0,23.223,14.46,43.1,34.83,51.199v260.369c0,30.39,24.724,55.117,55.112,55.117
                                        h210.236c30.389,0,55.111-24.729,55.111-55.117V166.944c20.369-8.1,34.83-27.977,34.83-51.199v-2.828
                                        C436.274,82.527,411.551,57.799,381.163,57.799z M241.214,26.139c19.037,0,34.927,13.645,38.443,31.66h-76.879
                                        C206.293,39.783,222.184,26.139,241.214,26.139z M375.305,427.312c0,15.978-13,28.979-28.973,28.979H136.096
                                        c-15.973,0-28.973-13.002-28.973-28.979V170.861h268.182V427.312z M410.135,115.744c0,15.978-13,28.979-28.973,28.979H101.266
                                        c-15.973,0-28.973-13.001-28.973-28.979v-2.828c0-15.978,13-28.979,28.973-28.979h279.897c15.973,0,28.973,13.001,28.973,28.979
                                        V115.744z"/>
                                    <path d="M171.144,422.863c7.218,0,13.069-5.853,13.069-13.068V262.641c0-7.216-5.852-13.07-13.069-13.07
                                        c-7.217,0-13.069,5.854-13.069,13.07v147.154C158.074,417.012,163.926,422.863,171.144,422.863z"/>
                                    <path d="M241.214,422.863c7.218,0,13.07-5.853,13.07-13.068V262.641c0-7.216-5.854-13.07-13.07-13.07
                                        c-7.217,0-13.069,5.854-13.069,13.07v147.154C228.145,417.012,233.996,422.863,241.214,422.863z"/>
                                    <path d="M311.284,422.863c7.217,0,13.068-5.853,13.068-13.068V262.641c0-7.216-5.852-13.07-13.068-13.07
                                        c-7.219,0-13.07,5.854-13.07,13.07v147.154C298.213,417.012,304.067,422.863,311.284,422.863z"/>
                                </g>
                            </g>
                        </svg>                    
                    </button>
                </div>
                <button className='bg-orange-600 rounded-lg text-white px-2 py-3 font-black hover:bg-orange-300'>
                    Checkout
                </button>
            </div>
        </div>
    }
    </div>
    
  )
}

//bg-orange-600 rounded-lg text-white px-16 py-3 font-black sm:px-8 sm:w-[90%] sm:mb-5 sm:justify-center'