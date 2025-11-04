import { useState, useEffect } from "react";

export default function Biydaalt() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    setProducts([
      {
        id: 1,
        name: "Acme Circles T-Shirt",
        price: "$20.00",
        image: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/t-shirt-1.png?v=1689798965"
      },
      {
        id: 2,
        name: "Acme Drawstring Bag",
        price: "$12.00",
        image: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/bag-1-dark.png?v=1689796304"
      },
      {
        id: 3,
        name: "Acme Cup",
        price: "$15.00",
        image: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/cup-black.png?v=1690003088"
      },
      {
        id: 4,
        name: "Acme Mug",
        price: "$15.00",
        image: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/mug-1.png?v=1690003527"
      },
      {
        id: 5,
        name: "Acme Hoodie",
        price: "$50.00",
        image: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/hoodie-1.png?v=1690003482"
      },
      {
        id: 6,
        name: "Acme Baby Onesie",
        price: "$10.00",
        image: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/baby-onesie-beige-1.png?v=1690002632"
      },
      {
        id: 7,
        name: "Acme Baby Cap",
        price: "$10.00",
        image: "https://cdn.shopify.com/s/files/1/0754/3727/7491/files/baby-cap-black.png?v=1690002570"
      }
    ]);
    setLoading(false);
  }, []);

  if (loading) { 
    return ( 
    <div className="min-h-screen bg-neutral-50 flex items-center justify-center"> 
    <div className="text-lg text-neutral-600">
      Loading...</div> 
      </div> 
      ); }

  return (
    <div className="min-h-screen bg-[#141313]">
      <nav className="relative flex items-center justify-between p-4 lg:px-6 bg-[#141313]">
        <div className="flex w-full items-center">
          <div className="flex w-full md:w-1/3">
            <a className="mr-2 flex w-full items-center justify-center md:w-auto lg:mr-6" href="/">
              <div className="flex flex-none items-center justify-center bg-black h-10 w-10 rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 28" className="h-4 w-4 fill-white">
                  <path d="M21.5758 9.75769L16 0L0 28H11.6255L21.5758 9.75769Z"></path>
                  <path d="M26.2381 17.9167L20.7382 28H32L26.2381 17.9167Z"></path>
                </svg>
              </div>
              <div className="ml-2 flex-none text-sm font-medium uppercase md:hidden lg:block">
                Acme Store
              </div>
            </a>
            <ul className="hidden gap-6 text-sm md:flex md:items-center">
              <li>
                <a className="text-neutral-500 underline-offset-4 hover:text-white hover:underline" href="/all">
                  All
                </a>
              </li>
              <li>
                <a className="text-neutral-500 underline-offset-4 hover:text-white hover:underline" href="shirts">
                  Shirts
                </a>
              </li>
              <li>
                <a className="text-neutral-500 underline-offset-4 hover:text-white hover:underline" href="/stickers">
                  Stickers
                </a>
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
            <button aria-label="Open cart">
               <div className="relative flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 dark:text-white">
                  <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        aria-hidden="true"
        className="h-4 transition-all ease-in-out hover:scale-110"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
        />
      </svg>

      <div className="absolute right-0 top-0 -mr-2 -mt-2 h-4 w-4 rounded bg-blue-600 text-[11px] font-medium text-white">
        2
      </div>
    </div>
  </button>
         </div>
        </div>
      </nav>
      <main>
        <section className="mx-auto grid max-w-screen-2xl gap-4 px-4 pb-4 md:grid-cols-6 md:grid-rows-2 lg:max-h-[calc(100vh-200px)]">
          <div className="md:col-span-4 md:row-span-2">
            <a className="relative block aspect-square h-full w-full" href="/product">
              <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border border-neutral-800  bg-black hover:border-blue-600">
                <img
                  alt={products[0].name}
                  src={products[0].image}
                  className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 flex w-full px-4 pb-4 lg:px-20 lg:pb-[35%]">
                  <div className="flex items-center rounded-full bg-black border border-neutral-700 p-1 text-xs font-semibold text-white backdrop-blur-md">
                    <h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">
                      {products[0].name}
                    </h3>
                    <p className="flex-none rounded-full bg-blue-600 p-2 text-white">
                      {products[0].price} <span className="ml-1 inline">USD</span>
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </div>

          {products.slice(1, 3).map((product) => (
            <div key={product.id} className="md:col-span-2 md:row-span-1">
              <a className="relative block aspect-square h-full w-full" href={`/product2`}>
                <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border border-neutral-800 bg-black hover:border-blue-600">
                  <img
                    alt={product.name}
                    src={product.image}
                    className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 flex w-full px-4 pb-4">
                    <div className="flex items-center rounded-full border border-neutral-700 bg-black text-xs font-semibold text-white backdrop-blur-md">
                      <h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">
                        {product.name}
                      </h3>
                      <p className="flex-none rounded-full bg-blue-600 p-2 text-white">
                        {product.price} <span className="ml-1">USD</span>
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </section>

        <div className="w-full overflow-x-auto pb-6 pt-1">
          <ul className="flex gap-4 px-4">
            {products.map((product) => (
              <li key={product.id} className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3">
                <a className="relative h-full w-full" href={`/product3`}>
                  <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border border-neutral-800 bg-black hover:border-blue-600">
                    <img
                      alt={product.name}
                      src={product.image}
                      className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 flex w-full px-4 pb-4">
                      <div className="flex items-center rounded-full border border-neutral-700 bg-black p-1 text-xs font-semibold text-white backdrop-blur-md">
                        <h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">
                          {product.name}
                        </h3>
                        <p className="flex-none rounded-full bg-blue-600 p-2 text-white">
                          {product.price} <span className="ml-1">USD</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
     </div>
      </main>

      <footer className="text-sm text-neutral-500">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 border-t border-neutral-200 px-6 py-12 text-sm md:flex-row md:gap-12 md:px-4">
          <div>
            <a className="flex items-center gap-2 text-black md:pt-1" href="/">
              <div className="flex flex-none items-center justify-center border border-neutral-200 bg-white h-[30px] w-[30px] rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 28" className="h-[10px] w-[10px] fill-black">
                  <path d="M21.5758 9.75769L16 0L0 28H11.6255L21.5758 9.75769Z"></path>
                  <path d="M26.2381 17.9167L20.7382 28H32L26.2381 17.9167Z"></path>
                </svg>
              </div>
              <span className="uppercase text-white">Acme Store</span>
            </a>
          </div>
          <nav>
            <ul>
              <li><a className="block p-2 text-lg underline-offset-4 hover:text-black hover:underline md:inline-block md:text-sm" href="/">Home</a></li>
              <li><a className="block p-2 text-lg underline-offset-4 hover:text-black hover:underline md:inline-block md:text-sm" href="/about">About</a></li>
              <li><a className="block p-2 text-lg underline-offset-4 hover:text-black hover:underline md:inline-block md:text-sm" href="/terms-conditions">Terms & Conditions</a></li>
              <li><a className="block p-2 text-lg underline-offset-4 hover:text-black hover:underline md:inline-block md:text-sm" href="/">Shipping & Return Policy</a></li>
              <li><a className="block p-2 text-lg underline-offset-4 hover:text-black hover:underline md:inline-block md:text-sm" href="/about">Privacy Policy</a></li>
              <li><a className="block p-2 text-lg underline-offset-4 hover:text-black hover:underline md:inline-block md:text-sm" href="/terms-conditions">FAQ</a></li>
            </ul>
          </nav>
          <div className="md:ml-auto">
            <a className="flex h-8 w-max flex-none items-center justify-center rounded-md border border-neutral-700 bg-black text-xs text-white" href="https://vercel.com/templates/next.js/nextjs-commerce">
              <span className="px-3">▲</span>
              <hr className="h-full border-r border-neutral-200" />
              <span className="px-3">Deploy</span>
            </a>
          </div>
        </div>
        <div className="border-t border-neutral-200 py-6 text-sm">
          <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-1 px-4 md:flex-row md:gap-0 md:px-4">
            <p>© 2023-2025 ACME, Inc. All rights reserved.</p>
            <hr className="mx-4 hidden h-4 w-[1px] border-l border-neutral-400 md:inline-block" />
            <p><a href="https://github.com/vercel/commerce">View the source</a></p>
            <p className="md:ml-auto"><a href="https://vercel.com" className="text-black">Created by ▲ Vercel</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}