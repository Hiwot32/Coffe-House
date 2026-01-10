"use client"
import React from 'react'
import { useState, useEffect } from 'react'
import menu from './menu.module.css'
import Image from 'next/image'

export default  function Menu() {
    const[products, setProducts]=useState({       
    coffee: [],
    tea: [],
    pastry: [],}
    )

    useEffect(()=>{
        async function fetchProducts(){
            try{
                const res=await fetch("/api/products")
                const data=await res.json()

                setProducts(data)

            }catch{
                console.log('Error Fething')

            }
        }
        fetchProducts()
    },[])

  return (
    <div className={`px-4 ${menu.outerDiv}`}>
        <div className="text-white text-center py-20"> 
            <p className="text-sm">Main Menu</p>
            <p className="text-5xl">OUR ORIGINAL COFFEE</p>
        </div>
        
<Image
  src="/images/productsImg/imgi_4_post-2.jpg"
  alt="coffee_cup"
  width={1200}
  height={600} 
  style={{ width: '100%', height: '500px', objectFit: 'cover' }}
  className="rounded-4xl" 
/>
        
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-10 px-3 text-white">
      {products.coffee.map((product) => (
        <div
          key={product.id}
          className="flex gap-4 border-b rounded-lg p-4 shadow hover:shadow-2xl transition"
        >
                 <img
            src={product.image}
            alt={product.title}
            className=" h-25 object-cover rounded"
          />
          <div>
        <div className="flex justify-between items-center gap-8 t">
          <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
           
<div className="w-40 border-t-2 border-dotted border-gray-400 my-2"></div> 

           <p className="text-md font-bold mt-2">${product.price}</p>

        </div>
         
          <p className="text-sm mt-1">{product.description}</p>
          </div>
         
        </div>
      ))}
    </div>


            <div className="text-white text-center py-20"> 
            <p className="text-sm">Recommendation</p>
            <p className="text-5xl">OUR TEA & BREAD</p>
        </div>
        
<Image
  src="/images/productsImg/imgi_13_menu-image-2.jpg"
  alt="coffee_cup"
  width={1200}
  height={600} 
  style={{ width: '100%', height: '500px', objectFit: 'cover' }}
  className="rounded-4xl" 
/>
        
    <div className="grid grid-cols-1  lg:grid-cols-2 gap-8 py-10 px-3 text-white">
      {products.tea.map((product) => (
        <div
          key={product.id}
          className="flex gap-4 border-b rounded-lg p-4 shadow hover:shadow-2xl transition"
        >
                 <img
            src={product.image}
            alt={product.title}
            className=" h-25 object-cover rounded"
          />
          <div>
        <div className="flex justify-between items-center gap-8 t">
          <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
           
<div className="w-40 border-t-2 border-dotted border-gray-400 my-2"></div> 

           <p className="text-md font-bold mt-2">${product.price}</p>

        </div>
         
          <p className="text-sm mt-1">{product.description}</p>
          </div>
         
        </div>
      ))}
    </div>



           <div className="text-white text-center py-20"> 
            <p className="text-sm">Perferct Pairings</p>
            <p className="text-5xl">OUR PASTRIES & CRAVING</p>
        </div>
        
<Image
  src="/images/productsImg/imgi_52_menu-image-3-1536x614.jpg"
  alt="coffee_cup"
  width={1200}
  height={600} 
  style={{ width: '100%', height: '500px', objectFit: 'cover' }}
  className="rounded-4xl" 
/>
        
    <div className="grid grid-cols-1  lg:grid-cols-2 gap-8 py-10 px-3 text-white">
      {products.pastry.map((product) => (
        <div
          key={product.id}
          className="flex gap-4 border-b rounded-lg p-4 shadow hover:shadow-2xl transition"
        >
                 <img
            src={product.image}
            alt={product.title}
            className=" h-25 object-cover rounded"
          />
          <div>
        <div className="flex justify-between items-center gap-8 t">
          <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
           
<div className="w-40 border-t-2 border-dotted border-gray-400 my-2"></div> 

           <p className="text-md font-bold mt-2">${product.price}</p>

        </div>
         
          <p className="text-sm mt-1">{product.description}</p>
          </div>
         
        </div>
      ))}
    </div> 
      
    </div>
  )
}
