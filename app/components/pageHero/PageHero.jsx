"use client"
import React from 'react'
import pageHero from './pageHero.module.css'

export default function PageHero({title}) {
  return (
    <div className={pageHero.outerSection}>
        <div className='py-50 pl-10 text-white'>
            <p className='text-white text-8xl'>{title}</p>
        </div>
      
    </div>
  )
}
