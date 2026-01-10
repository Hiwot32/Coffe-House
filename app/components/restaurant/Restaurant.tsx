"use client"
import React from 'react'
import restaurant from './restaurant.module.css'
import Image from 'next/image'

export default function Restaurant() {
  return (
    <div className={restaurant.outerSection}>
        <div className="flex flex-col lg:flex-row gap-12 py-20 px-10">
            <div className='text-center text-white items-center'>
                <p className='text-sm font-bold pb-2'>About Restaurant</p>
                <p className='text-4xl pb-8 border-b border-b-white'>OUR PHILOSOPHY</p>

                <p className='py-8 text-lg font-bold'>A place where food, design, and ambiance come together to create a experience.</p>

                <p className='text-lg '>Experience Ray’s incomparable outdoor riverside dining at Ray’s on the river, along with scenic.</p>

                <p className='py-8 text-lg'>While social distancing is one of our top priorities, guests may still enjoy beautiful surrounding.</p>
                <div className='flex justify-center py-4'>
                <Image src="/images/restauratImg/imgi_10_author-signature (1).svg" alt='signature' width={150} height={150} />
                </div>

                <p>JOHNATHAN - CHEF MASTER</p>

            </div>
            <div className='rounded-t-full overflow-hidden py-4'>
                <Image src='/images/restauratImg/imgi_11_about-restaurant-img.jpg' alt='restaurant' width={560} height={790} />

            </div>
            <div className='text-center text-white'>
                <p className='text-sm font-bold pb-2'>Time of Luxury</p>
                <p className='text-4xl pb-8 border-b border-b-white'>OPEN HOUR TIME</p>
                <p className='py-8 text-lg font-bold'>Come and experience the classy atmosphere with delicious food and music.</p>
                <p className='text-lg pb-3'>Monday - Friday : 9.00am — 22.00pm</p>
                <p className='text-lg pb-3'>Saturday : 10.00am — 23.00pm</p>
                <p className='text-lg pb-3'>Sunday : 5.00pm — 23.00pm</p>
                <p className='text-lg pb-3'>Holidays : Closed</p>
                <p className='text-lg pb-3'>Happy Hour : 18.00 pm — 20.00pm</p>
                <hr />
                <p className='text-lg font-bold py-5'>“ On holidays is a special day, we will open and with special offer, we will announce! “</p>

            </div>
        </div>
      
    </div>
  )
}
