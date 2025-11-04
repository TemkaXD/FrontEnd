import { useState } from 'react';
import Link from "next/link";

export default function All() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('Relevance');

  const products = [
    { id: 1, name: 'Acme Keyboard', price: 150, image: 'https://cdn.shopify.com/s/files/1/0754/3727/7491/files/keyboard.png?v=1690003507', category: 'Electronics' },
    { id: 2, name: 'Acme T-Shirt', price: 20, image: 'https://cdn.shopify.com/s/files/1/0754/3727/7491/files/t-shirt-color-black.png?v=1690003675', category: 'Shirts' },
    { id: 3, name: 'Acme Hoodie', price: 50, image: 'https://cdn.shopify.com/s/files/1/0754/3727/7491/files/hoodie-1.png?v=1690003482', category: 'Hoodies' },
    { id: 4, name: 'Acme Cowboy Hat', price: 160, image: 'https://cdn.shopify.com/s/files/1/0754/3727/7491/files/cowboy-hat-black-1.png?v=1690208765', category: 'Headwear' },
    { id: 5, name: 'Acme Sticker', price: 4, image: 'https://cdn.shopify.com/s/files/1/0754/3727/7491/files/sticker.png?v=1690003619', category: 'Stickers' },
    { id: 6, name: 'Acme Mug', price: 15, image: 'https://cdn.shopify.com/s/files/1/0754/3727/7491/files/mug-1.png?v=1690003527', category: 'Drinkware' },
  ];

  const categories = ['All', 'Electronics', 'Shirts', 'Hoodies', 'Headwear', 'Stickers', 'Drinkware'];
  const sortOptions = ['Relevance', 'Price: Low to high', 'Price: High to low'];

  const filteredProducts = products.filter(p => 
    (selectedCategory === 'All' || p.category === selectedCategory) &&
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#141313]">
      <nav className="relative flex items-center justify-between p-4 lg:px-6 bg-[#141313]">
        <div className="flex w-full items-center">
          <div className="flex w-full md:w-1/3">
            <Link className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6" href="/biydaalt">
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
                <Link className="text-neutral-500 underline-offset-4 hover:text-white hover:underline" href="/shirts">
                  Shirts
                </Link>
              </li>
              <li>
                <Link className="text-neutral-500 underline-offset-4 hover:text-white hover:underline" href="/stickers">
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

      <main className="mx-auto flex max-w-screen-2xl gap-8 px-4 py-8">
        <div className="w-[125px] flex-none">
          <h3 className="text-xs text-neutral-500 dark:text-neutral-400 mb-2">Collections</h3>
          <ul className="space-y-2">
            {categories.map(cat => (
              <li key={cat}>
                <button
                  onClick={() => setSelectedCategory(cat)}
                  className={`w-full text-left text-sm ${selectedCategory === cat ? 'underline font-medium' : ''} hover:underline`}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-1">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredProducts.map(product => (
              <li key={product.id} className="aspect-square">
                <div className="group h-full w-full rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black overflow-hidden hover:border-blue-600 transition-colors">
                  <div className="relative h-3/4 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between rounded-full border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-black/70 p-2 backdrop-blur-md">
                      <h3 className="text-xs font-semibold flex-grow">{product.name}</h3>
                      <p className="text-xs font-semibold rounded-full bg-blue-600 text-white px-3 py-1">
                        ${product.price}.00 USD
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-[125px] flex-none">
          <h3 className="text-xs text-neutral-500 dark:text-neutral-400 mb-2">Sort by</h3>
          <ul className="space-y-2">
            {sortOptions.map(option => (
              <li key={option}>
                <button
                  onClick={() => setSortBy(option)}
                  className={`w-full text-left text-sm ${sortBy === option ? 'underline font-medium' : ''} hover:underline`}
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}