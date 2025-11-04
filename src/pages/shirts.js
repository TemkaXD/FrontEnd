import { useState } from 'react';
import Link from "next/link";

export default function Shirts() {
  const [searchQuery, setSearchQuery] = useState('');

  const shirts = [
    { 
      id: 1, 
      name: 'Acme T-Shirt', 
      price: 20, 
      image: 'https://cdn.shopify.com/s/files/1/0754/3727/7491/files/t-shirt-color-black.png?v=1690003675'
    },
    { 
      id: 2, 
      name: 'Acme Circles T-Shirt', 
      price: 20, 
      image: 'https://cdn.shopify.com/s/files/1/0754/3727/7491/files/t-shirt-1.png?v=1689798965'
    },
    { 
      id: 3, 
      name: 'Acme Prism T-Shirt', 
      price: 25, 
      image: 'https://cdn.shopify.com/s/files/1/0754/3727/7491/files/t-shirt-spiral-1.png?v=1690003571'
    },
  ];

  const filteredShirts = shirts.filter(s => 
    s.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#141313]">
      <nav className="relative flex items-center justify-between p-4 lg:px-6 bg-[#141313]">
        <div className="flex w-full items-center">
          <div className="flex w-full md:w-1/3">
            <Link className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6" href="/">
              <div className="flex flex-none items-center justify-center bg-white h-10 w-10 rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 28" className="h-4 w-4 fill-black">
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
                <Link className="text-neutral-500 underline-offset-4 hover:text-black hover:underline" href="/search/shirts">
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

      <main className="mx-auto flex max-w-screen-2xl flex-col gap-8 px-4 pb-4 md:flex-row">
        <div className="order-first w-full flex-none md:max-w-[125px]">
          <nav>
            <h3 className="hidden text-xs text-neutral-500 md:block dark:text-neutral-400 mb-2">Collections</h3>
            <ul className="hidden md:block space-y-2">
              <li><Link href="#" className="text-sm text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300">All</Link></li>
              <li><Link href="#" className="text-sm text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300">Bags</Link></li>
              <li><Link href="#" className="text-sm text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300">Drinkware</Link></li>
              <li><Link href="#" className="text-sm text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300">Electronics</Link></li>
              <li><Link href="#" className="text-sm text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300">Footwear</Link></li>
              <li><Link href="#" className="text-sm text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300">Headwear</Link></li>
              <li><Link href="#" className="text-sm underline underline-offset-4 font-medium">Shirts</Link></li>
              <li><Link href="#" className="text-sm text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300">Stickers</Link></li>
            </ul>
          </nav>
        </div>

        <div className="order-last min-h-screen w-full md:order-none">
          <ul className="grid grid-flow-row gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {filteredShirts.map(shirt => (
              <li key={shirt.id} className="aspect-square transition-opacity animate-fadeIn">
                <div className="relative inline-block h-full w-full group cursor-pointer">
                  <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black border-neutral-200 dark:border-neutral-800 transition-colors">
                    <img
                      src={shirt.image}
                      alt={shirt.name}
                      className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 flex w-full px-4 pb-4">
                      <div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white w-full">
                        <h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">
                          {shirt.name}
                        </h3>
                        <p className="flex-none rounded-full bg-blue-600 p-2 text-white">
                          ${shirt.price}.00 <span className="ml-1">USD</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="order-none flex-none md:order-last md:w-[125px]">
          <nav>
            <h3 className="hidden text-xs text-neutral-500 md:block dark:text-neutral-400 mb-2">Sort by</h3>
            <ul className="hidden md:block space-y-2">
              <li><Link href="#" className="text-sm underline underline-offset-4 hover:underline">Relevance</Link></li>
              <li><Link href="#" className="text-sm hover:underline hover:underline-offset-4">Trending</Link></li>
              <li><Link href="#" className="text-sm hover:underline hover:underline-offset-4">Latest arrivals</Link></li>
              <li><Link href="#" className="text-sm hover:underline hover:underline-offset-4">Price: Low to high</Link></li>
              <li><Link href="#" className="text-sm hover:underline hover:underline-offset-4">Price: High to low</Link></li>
            </ul>
          </nav>
        </div>
      </main>

      <footer className="text-sm text-neutral-500 dark:text-neutral-400 border-t border-neutral-200 dark:border-neutral-700 mt-12">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-6 py-12 md:flex-row md:gap-12">
          <div>
            <Link className="flex items-center gap-2 text-black dark:text-white" href="#">
              <div className="flex items-center justify-center border border-neutral-200 bg-white dark:border-neutral-700 dark:bg-black h-8 w-8 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 28" className="h-3 w-3 fill-black dark:fill-white">
                  <path d="M21.5758 9.75769L16 0L0 28H11.6255L21.5758 9.75769Z" />
                  <path d="M26.2381 17.9167L20.7382 28H32L26.2381 17.9167Z" />
                </svg>
              </div>
              <span className="uppercase text-sm">Acme Store</span>
            </Link>
          </div>
          <nav>
            <ul className="flex flex-wrap gap-4">
              <li><Link href="#" className="underline-offset-4 hover:text-black hover:underline dark:hover:text-neutral-300">Home</Link></li>
              <li><Link href="#" className="underline-offset-4 hover:text-black hover:underline dark:hover:text-neutral-300">About</Link></li>
              <li><Link href="#" className="underline-offset-4 hover:text-black hover:underline dark:hover:text-neutral-300">Terms & Conditions</Link></li>
              <li><Link href="#" className="underline-offset-4 hover:text-black hover:underline dark:hover:text-neutral-300">Privacy Policy</Link></li>
            </ul>
          </nav>
        </div>
        <div className="border-t border-neutral-200 dark:border-neutral-700 py-6">
          <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-2 px-4 md:flex-row">
            <p>© 2023-2025 ACME, Inc. All rights reserved.</p>
            <p className="md:ml-auto">Created by ▲ Vercel</p>
          </div>
        </div>
      </footer>
    </div>
  );
}