"use client"
import React from 'react'
import contact from './contact.module.css'

export default function ContactUs() {
  return (
    <div
      className={`flex flex-col lg:flex-row px-4 gap-12 py-15 text-white ${contact.outerDiv}`}
    >

      {/* LEFT SECTION */}
      <div className="lg:w-1/2">
        <p className="text-4xl pb-4">GET IN TOUCH WITH US</p>
        <p className="pb-8">
          We’d love to hear from you! Whether you have questions, need support, or want to discuss a project, feel free to reach out.
        </p>

        {/* PHONE + EMAIL */}
        <div className="flex flex-col sm:flex-row gap-8 py-8 border rounded-3xl px-10 mb-8">
          <div className="py-4 sm:border-r sm:pr-10">
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

      {/* RIGHT SECTION (FORM) */}
      <div className="lg:w-1/2 border rounded-2xl p-8">
        <h1 className="text-2xl pb-4">Send A Message</h1>
        <p className="pb-6">
          Unlock your potential with expert guidance! Schedule a free consultation toward personal and business success.
        </p>

        <form className="space-y-4">

          {/* NAME */}
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-full text-white border border-gray-300 p-2 rounded-md text-black"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full text-white border border-gray-300 p-2 rounded-md text-black"
            />
          </div>

          {/* PHONE + EMAIL */}
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Phone"
              className="w-full text-white border border-gray-300 p-2 rounded-md text-black"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full text-white border border-gray-300 p-2 rounded-md text-black"
            />
          </div>

          {/* MESSAGE */}
          <textarea
            placeholder="Your Message"
            rows={4}
            className="w-full text-white border border-gray-300 p-2 rounded-md text-black"
          ></textarea>

          {/* BUTTON */}
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-2 rounded-md"
          >
            Submit
          </button>

        </form>
      </div>

    </div>
  )
}
