"use client";

import React, { useState, useEffect } from 'react';
import menu from './menu.module.css';
import Image from 'next/image';

interface Product {
  id: number;
  title: string;
  description: string | null;
  price: number;
  image: string;
  createdAt?: string | Date;
}

interface ProductState {
  coffee: Product[];
  tea: Product[];
  pastry: Product[];
}

export default function Menu() {
  const [products, setProducts] = useState<ProductState>({
    coffee: [],
    tea: [],
    pastry: [],
  });

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("/api/products");
        if (!res.ok) throw new Error("Failed to fetch");
        const data: ProductState = await res.json();
        setProducts(data);
      } catch (error) {
        console.error('Error Fetching products:', error);
      }
    }
    fetchProducts();
  }, []);

  return (
    <div className={`px-4 ${menu.outerDiv}`}>
      <div className="text-white text-center py-20">
        <p className="text-sm">Main Menu</p>
        <p className="text-5xl font-bold">OUR ORIGINAL COFFEE</p>
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
            className="flex gap-4 border-b border-gray-700 rounded-lg p-4 shadow hover:shadow-2xl transition bg-gray-900/50"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-24 h-24 object-cover rounded"
            />
            <div className="flex-1">
              <div className="flex justify-between items-center gap-4">
                <h2 className="text-lg font-semibold">{product.title}</h2>
                <div className="flex-1 border-t-2 border-dotted border-gray-600 mx-2"></div>
                <p className="text-md font-bold">${product.price}</p>
              </div>
              <p className="text-sm text-gray-400 mt-2">{product.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-white text-center py-20">
        <p className="text-sm">Recommendation</p>
        <p className="text-5xl font-bold">OUR TEA & BREAD</p>
      </div>

      <Image
        src="/images/productsImg/imgi_13_menu-image-2.jpg"
        alt="tea and bread"
        width={1200}
        height={600}
        style={{ width: '100%', height: '500px', objectFit: 'cover' }}
        className="rounded-4xl"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-10 px-3 text-white">
        {products.tea.map((product) => (
          <div
            key={product.id}
            className="flex gap-4 border-b border-gray-700 rounded-lg p-4 shadow hover:shadow-2xl transition bg-gray-900/50"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-24 h-24 object-cover rounded"
            />
            <div className="flex-1">
              <div className="flex justify-between items-center gap-4">
                <h2 className="text-lg font-semibold">{product.title}</h2>
                <div className="flex-1 border-t-2 border-dotted border-gray-600 mx-2"></div>
                <p className="text-md font-bold">${product.price}</p>
              </div>
              <p className="text-sm text-gray-400 mt-2">{product.description}</p>
            </div>
          </div>
        ))}
      </div>

     
      <div className="text-white text-center py-20">
        <p className="text-sm">Perfect Pairings</p>
        <p className="text-5xl font-bold">OUR PASTRIES & CRAVINGS</p>
      </div>

      <Image
        src="/images/productsImg/imgi_52_menu-image-3-1536x614.jpg"
        alt="pastries"
        width={1200}
        height={600}
        style={{ width: '100%', height: '500px', objectFit: 'cover' }}
        className="rounded-4xl"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-10 px-3 text-white">
        {products.pastry.map((product) => (
          <div
            key={product.id}
            className="flex gap-4 border-b border-gray-700 rounded-lg p-4 shadow hover:shadow-2xl transition bg-gray-900/50"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-24 h-24 object-cover rounded"
            />
            <div className="flex-1">
              <div className="flex justify-between items-center gap-4">
                <h2 className="text-lg font-semibold">{product.title}</h2>
                <div className="flex-1 border-t-2 border-dotted border-gray-600 mx-2"></div>
                <p className="text-md font-bold">${product.price}</p>
              </div>
              <p className="text-sm text-gray-400 mt-2">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}