'use client'

import React, {useState} from 'react'

export default function Cart() {
    
    const [counter, setCounter] = useState(0)

    function addItem () {
        setCounter(counter + 1)
    }

    function discardItem() {
        if (counter !== 0) {
            setCounter(counter - 1)
        }
    }

  return (
    <div className='flex flex-row gap-10 mt-5 sm:flex-col'>
        <div className='flex flex-row gap-10 items-center sm:w-[85vw] sm:mr-44 sm:justify-around'>
            <button onClick={() => discardItem()}>
                <h2 className='text-xl font-black text-orange-600'>
                    -
                </h2>
            </button>
            <p className='font-black'>{counter}</p>
            <button onClick={() => addItem()}>
                <h2 className='text-xl font-black text-orange-600'>
                    +
                </h2>
            </button>
        </div>
        <button className='flex flex-row gap-3 bg-orange-600 rounded-lg text-white px-16 py-3 font-black sm:px-8 sm:w-[90%] sm:mb-5 sm:justify-center'>
            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="white" fillRule="nonzero"/>
            </svg>
            Add to cart
        </button>
    </div>
  )
}
