"use client"
import React from 'react'
import footer from './footer.module.css'
import Image from 'next/image'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function Footer() {
  return (
    <div className={`py-20 ${footer.outerDiv}`}>
      {/* Container for the 3 columns */}
      <div className='flex flex-col md:flex-row justify-between w-[88%] mx-auto py-15 gap-10 md:gap-0'>
        
        {/* COLUMN 1 */}
        <div className='flex flex-col items-center text-center flex-1 border-b border-gray-600 pb-10 md:pb-0 md:border-b-0 md:border-r'>
          <Image 
            className="mx-auto"
            src="/images/footerImg/download(2).svg" 
            alt="contactImg"
            width={50}
            height={50}
          />
          <p className={`pt-4 text-2xl  ${footer.titles}`}>CONTACT US</p>
          <p className='py-1 text-lg text-white'>T. +123 456 789</p>
          <p className='text-lg text-white'>M. info@domainname.com</p>
        </div>

        {/* COLUMN 2 */}
        <div className='flex flex-col items-center text-center flex-1 border-b border-gray-600 pb-10 md:pb-0 md:border-b-0 md:border-r'>
          <Image 
            className="mx-auto"
            src="/images/footerImg/download(1).svg" 
            alt="contactImg"
            width={50}
            height={50}
          />
          <p className={`pt-4 text-2xl ${footer.titles}`}>ADDRESS</p>
          <p className='py-1 text-lg text-white px-4'>
            29721 Westheimer Road, <br/> Santa Ana, Illinois 85486
          </p>
        </div>

        {/* COLUMN 3 */}
        <div className='flex flex-col items-center text-center flex-1'>
          <Image 
            className={` ${footer.titles}`}
            src="/images/footerImg/download.svg" 
            alt="contactImg"
            width={50}
            height={50}
          />
          <p className={`pt-4 text-2xl ${footer.titles}`}>OPENING HOURS</p>
          <p className='py-1 text-lg text-white'>
            Everyday: From 12.30 To 23.00 <br/>
            Kitchen Closes At 22.00
          </p>
        </div>

      </div>

      {/* Bottom bar */}
      <div className='flex justify-between items-center w-[88%] mx-auto mt-10 border-t border-gray-600 pt-6 text-white'>
        <p>Copyright &copy; 2026 All Rights Reserved.</p>
        <div className='flex gap-4'>
          <FacebookOutlinedIcon />
          <InstagramIcon />
          <YouTubeIcon />
        </div>
      </div>
    </div>
  )
}