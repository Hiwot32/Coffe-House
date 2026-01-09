"use client"
import React from 'react'
import contact from './contact.module.css'

export default function ContactUs() {
  return (
    <div className={`flex px-4 gap-15 py-15 text-white ${contact.outerDiv}`}>
        <div className="">
            <p className="text-4xl pb-4">GET IN TOUCH WITH US</p>
            <p className="pb-8">We’d love to hear from you! Whether you have questions, need support, or want to discuss a project, feel free to reach out.</p>

            <div className="flex gap-15 py-8 border rounded-3xl px-10 mb-8">
                <div className='py-4 border-r pr-20 '>
                <h2 className="text-xl pb-2">Phone Number</h2>
                <p>+251 943 8976 67</p>
                </div>
                <div className='py-4'>
                    <h2 className="text-xl pb-2">Email Address</h2>
                    <p>coffehouse@gmail.com</p>
                </div>
            </div>
            <div className="py-8 border rounded-3xl px-10 mb-8">
                <h2 className="text-xl pb-2">Address</h2>
                <p>Address 123 Creative Lane London, SW1A 1AA United Kingdom</p>
            </div>
        </div>
        <div className="border rounded-2xl p-8">
            <h1 className='text-2xl pb-4'>Send A Message</h1>
            <p className="pb-3">Unlock your potential with expert guidance! Schedule a free consultation toward personal and business success.</p>
<form className="space-y-4 max-w-lg mx-auto">
  
  <div className="flex gap-4">
    <input
      type="text"
      name="fname"
      placeholder="First Name"
      className="w-1/2 border border-gray-300 p-2 rounded-md"
    />
    <input
      type="text"
      name="lname"
      placeholder="Last Name"
      className="w-1/2 border border-gray-300 p-2 rounded-md"
    />
  </div>

 
  <div className="flex gap-4">
    <input
      type="text"
      name="phone"
      placeholder="Phone"
      className="w-1/2 border border-gray-300 p-2 rounded-md"
    />
    <input
      type="email"
      name="email"
      placeholder="Email"
      className="w-1/2 border border-gray-300 p-2 rounded-md"
    />
  </div>

  <textarea
    placeholder="Your Message"
    
    className="w-full border border-gray-300 p-2 rounded-md"
  ></textarea>

  
  <button
    type="submit"
    className="bg-blue-600 text-white px-4 py-2 rounded-md"
  >
    Submit
  </button>

</form>



        </div>
      
    </div>
  )
}
