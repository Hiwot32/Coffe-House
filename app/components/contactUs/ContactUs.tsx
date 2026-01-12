"use client"
import React from 'react'

export default function ContactUs() {
  return (
    <div
      className={"bg-[rgb(18,29,35)] mx-auto px-4 py-15 text-white"}
    >

      {/* LEFT SECTION */}
      <div className="max-w-xl mx-auto px-4 text-center">
        <p className="text-4xl pb-4">GET IN TOUCH WITH US</p>
        <p className="pb-8 ">
          We’d love to hear from you! Whether you have questions, need support, or want to discuss a project, feel free to reach out.
        </p>

        {/* PHONE + EMAIL */}
        <div className="flex flex-col sm:flex-row gap-16 py-8 border rounded-3xl px-10 mb-8">
          <div className="py-4 sm:border-r sm:pr-20">
            <h2 className="text-xl pb-2">Phone Number</h2>
            <p>+251 943 8976 67</p>
          </div>
          <div className="py-4">
            <h2 className="text-xl pb-2">Email Address</h2>
            <p>coffehouse@gmail.com</p>
          </div>
        </div>

        {/* ADDRESS */}
        <div className="py-8 border rounded-3xl px-10 mb-8">
          <h2 className="text-xl pb-2">Address</h2>
          <p>Address 123 Creative Lane London, SW1A 1AA United Kingdom</p>
        </div>
      </div>

    

    </div>
  )
}
