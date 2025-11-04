import { useState } from 'react';
import Link from "next/link";

export default function Page() {
  const [selectedSize, setSelectedSize] = useState('Medium');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const product = {
    name: 'Acme Drawstring Bag',
    price: 12,
    description: 'Strong 210D ripstop nylon drawstring bag',
    features: [
      "Strong 210D ripstop nylon drawstring bag",
      "Available in multiple sizes",
      "Easy-to-close durable drawstring",
      "Sturdy, reusable, and resilient"
    ],
    images: [
      "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/bag-1-dark.png?v=1689796304",
      "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/bag-1-light.png?v=1689796304",
    ],
    sizes: ["Small", "Medium", "Large"]
  };

  const relatedProducts = [
    { 
      id: 1, 
      name: "Acme Cup", 
      price: 15, 
      image: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/cup-black.png?v=1690003088"
    },
    { 
      id: 2, 
      name: "Acme Mug", 
      price: 15, 
      image: 'https://cdn.shopify.com/s/files/1/0754/3727/7491/files/mug-1.png?v=1690003527'
    },
    { 
      id: 3, 
      name: "Acme Sticker", 
      price: 4, 
      image: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/sticker.png?v=1690003619"
    },
  ];

  return (
    <div className="min-h-screen bg-[#141313]">
      <nav className="relative flex items-center justify-between p-4 lg:px-6 bg-[#141313]">
        <div className="flex w-full items-center">
          <div className="flex w-full md:w-1/3">
            <Link className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6" href="/biydaalt">
              <div className="flex flex-none items-center justify-center bg-black h-10 w-10 rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 28" className="h-4 w-4 fill-white">
                  <path d="M21.5758 9.75769L16 0L0 28H11.6255L21.5758 9.75769Z"></path>
                  <path d="M26.2381 17.9167L20.7382 28H32L26.2381 17.9167Z"></path>
                </svg>
              </div>
              <div className="ml-2 flex-none text-sm font-medium uppercase md:hidden lg:block">
                Acme Store
              </div>
            </Link>
            <ul className="hidden gap-6 text-sm md:flex md:items-center">
              <li>
                <Link className="text-neutral-500 underline-offset-4 hover:text-white hover:underline" href="/all">
                  All
                </Link>
              </li>
              <li>
                <Link className="text-neutral-500 underline-offset-4 hover:text-black hover:underline" href="/shirts">
                  Shirts
                </Link>
              </li>
              <li>
                <Link className="text-neutral-500 underline-offset-4 hover:text-black hover:underline" href="/stickers">
                  Stickers
                </Link>
              </li>
            </ul>
          </div>

          <div className="hidden justify-center md:flex md:w-1/3">
            <form className="relative w-full lg:w-80 xl:w-full">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full rounded-lg border border-neutral-700 bg-black px-4 py-2 text-sm text-white placeholder:text-neutral-500"
              />
              <div className="absolute right-0 top-0 mr-3 flex h-full items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
              </div>
            </form>
          </div>

          <div className="flex justify-end md:w-1/3">
            <button className="flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
              </svg>
            </button>
          </div>
        </div>
      </nav>


      <body className="mx-auto max-w-screen-2xl px-4 py-8">
        <div className="flex flex-col gap-8 md:flex-row md:gap-12">
          <div className="flex-1">
            <div className="relative aspect-square mb-4 overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="h-full w-full object-contain"
              />
            </div>
            
            <div className="flex gap-2">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`relative aspect-square w-20 overflow-hidden rounded-lg border ${
                    selectedImage === idx 
                      ? 'border-blue-600' 
                      : 'border-neutral-200 dark:border-neutral-800'
                  } bg-white dark:bg-black hover:border-neutral-400 transition-colors`}
                >
                  <img
                    src={img}
                    alt={`${product.name} ${idx + 1}`}
                    className="h-full w-full object-contain"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1">
            <div className="mb-6">
              <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
              <p className="text-2xl font-semibold">${product.price}.00 USD</p>
            </div>

            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6">
              {product.description}
            </p>

            <div className="mb-6">
              <label className="text-sm font-medium mb-3 block">Size</label>
              <div className="flex gap-2">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`flex h-10 px-6 items-center justify-center rounded-md border text-sm font-medium transition-colors ${
                      selectedSize === size
                        ? 'border-blue-600 bg-blue-600 text-white'
                        : 'border-neutral-200 dark:border-neutral-800 hover:border-neutral-400'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label className="text-sm font-medium mb-3 block">Quantity</label>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="flex h-10 w-10 items-center justify-center rounded-md border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-4 w-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                  </svg>
                </button>
                <span className="flex h-10 w-16 items-center justify-center rounded-md border border-neutral-200 dark:border-neutral-800 text-sm font-medium">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="flex h-10 w-10 items-center justify-center rounded-md border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-4 w-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14m7-7H5" />
                  </svg>
                </button>
              </div>
            </div>

            <button className="w-full rounded-full bg-blue-600 px-6 py-4 text-sm font-medium text-white hover:bg-blue-700 transition-colors">
              Add to Cart
            </button>

            <div className="mt-8 border-t border-neutral-200 dark:border-neutral-800 pt-6">
              <h3 className="text-sm font-medium mb-3">Product Features</h3>
              <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                {product.features.map((feature, idx) => (
                  <li key={idx}>• {feature}</li>
                ))}
              </ul>
            </div>

            <div className="mt-6 p-4 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900">
              <div className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5 text-neutral-600 dark:text-neutral-400 flex-shrink-0 mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                </svg>
                <div className="flex-1">
                  <p className="text-sm font-medium mb-1">Free Shipping</p>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400">
                    Free standard shipping on orders over $50. Estimated delivery in 5-7 business days.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">You might also like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {relatedProducts.map(item => (
              <div key={item.id} className="aspect-square group cursor-pointer">
                <div className="h-full w-full rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black overflow-hidden hover:border-blue-600 transition-colors">
                  <div className="relative h-3/4 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-semibold">{item.name}</h3>
                      <p className="text-sm font-semibold">${item.price}.00 USD</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </body>

      <footer className="text-sm text-neutral-500 dark:text-neutral-400 border-t border-neutral-200 dark:border-neutral-700 mt-16">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-6 py-12 md:flex-row md:gap-12">
          <div>
            <a className="flex items-center gap-2 text-black dark:text-white" href="#">
              <div className="flex items-center justify-center border border-neutral-200 bg-white dark:border-neutral-700 dark:bg-black h-8 w-8 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 28" className="h-3 w-3 fill-black dark:fill-white">
                  <path d="M21.5758 9.75769L16 0L0 28H11.6255L21.5758 9.75769Z" />
                  <path d="M26.2381 17.9167L20.7382 28H32L26.2381 17.9167Z" />
                </svg>
              </div>
              <span className="uppercase text-sm">Acme Store</span>
            </a>
          </div>
          <nav>
            <ul className="flex flex-wrap gap-4">
              <li><a href="#" className="underline-offset-4 hover:text-black hover:underline dark:hover:text-neutral-300">Home</a></li>
              <li><a href="#" className="underline-offset-4 hover:text-black hover:underline dark:hover:text-neutral-300">About</a></li>
              <li><a href="#" className="underline-offset-4 hover:text-black hover:underline dark:hover:text-neutral-300">Terms & Conditions</a></li>
              <li><a href="#" className="underline-offset-4 hover:text-black hover:underline dark:hover:text-neutral-300">Shipping & Return Policy</a></li>
              <li><a href="#" className="underline-offset-4 hover:text-black hover:underline dark:hover:text-neutral-300">Privacy Policy</a></li>
              <li><a href="#" className="underline-offset-4 hover:text-black hover:underline dark:hover:text-neutral-300">FAQ</a></li>
            </ul>
          </nav>
          <div className="md:ml-auto">
            <a className="flex h-8 w-max flex-none items-center justify-center rounded-md border border-neutral-200 bg-white text-xs text-black dark:border-neutral-700 dark:bg-black dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors" href="#">
              <span className="px-3">▲</span>
              <hr className="h-full border-r border-neutral-200 dark:border-neutral-700" />
              <span className="px-3">Deploy</span>
            </a>
          </div>
        </div>
        <div className="border-t border-neutral-200 dark:border-neutral-700 py-6">
          <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-1 px-4 md:flex-row md:gap-0">
            <p>© 2023-2025 ACME, Inc. All rights reserved.</p>
            <hr className="mx-4 hidden h-4 w-[1px] border-l border-neutral-400 md:inline-block" />
            <p><a href="#" className="hover:text-black dark:hover:text-white">View the source</a></p>
            <p className="md:ml-auto">
              <a href="#" className="text-black dark:text-white hover:underline">Created by ▲ Vercel</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}