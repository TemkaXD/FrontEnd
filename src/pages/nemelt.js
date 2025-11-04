"use client";
import { useState } from "react";

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div className="font-mono overflow-x-hidden text-base bg-white">
      <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-5 px-8">
          <a href="/products">
            <img
              className="h-20 cursor-pointer"
              alt="Logo"
              src="/bag.png"
            />
          </a>
          <div
            className="relative cursor-pointer"
            onClick={() => setIsCartOpen(!isCartOpen)}
          >
            <div className="w-16 h-16 flex items-center justify-center text-5xl">
              🛒
            </div>
            <div className="absolute -top-2 -right-2 bg-violet-400 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
              {cartItems.length}
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-8 pt-32">
        <div className="w-full h-64 bg-contain bg-right bg-no-repeat my-5 sm:bg-white md:bg-[url(https://www.apple.com/v/macbook-air/v/images/overview/hero/hero_endframe__c67cz35iy9me_large.png)] flex flex-col justify-center">
          <h1 className="text-5xl font-bold mb-3 text-black">
            Shop The
            <br />
            Latest Product
          </h1>
          <p className="text-gray-500 mb-3">
            Check out our new arrivals and
            <br />
            best selling items
          </p>
          <a className="text-black px-6 py-3 pr-16 rounded-full transition">
            Shop Now
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-5">
          <div className="relative group rounded-2xl shadow flex flex-col bg-white p-4 hover:shadow-lg transition-shadow">
            <img
              src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
              alt="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
              className="w-full h-48 object-contain mb-4"
            />
            <h2 className="font-bold text-lg text-black my-2 line-clamp-2 h-12 group-hover:text-violet-600 transition-colors">
              Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
            </h2>
            <div className="text-xl mb-2 font-semibold text-gray-500 group-hover:text-violet-600">
              $109.95
            </div>
            <div className="text-sm text-gray-500 mb-4 capitalize group-hover:text-violet-600">
              men's clothing
            </div>
            <button
              className="bg-violet-500 hover:bg-violet-600 text-white font-semibold px-5 py-3 rounded-full active:scale-95 transition"
              onClick={() =>
                addToCart({
                  title:
                    "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
                  price: 109.95,
                  category: "men's clothing",
                  image:
                    "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
                })
              }
            >
              Add to Cart
            </button>
          </div>

          <div className="relative group rounded-2xl shadow flex flex-col bg-white p-4 hover:shadow-lg transition-shadow">
            <img
              src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png"
              alt="Mens Casual Premium Slim Fit T-Shirts"
              className="w-full h-48 object-contain mb-4"
            />
            <h2 className="font-bold text-lg my-2 line-clamp-2 h-12 group-hover:text-violet-600 transition-colors text-black">
              Mens Casual Premium Slim Fit T-Shirts
            </h2>
            <div className="text-xl mb-2 font-semibold text-gray-500 group-hover:text-violet-600">
              $22.3
            </div>
            <div className="text-sm text-gray-500 mb-4 capitalize group-hover:text-violet-600">
              men's clothing
            </div>
            <button
              className="bg-violet-500 hover:bg-violet-600 text-white font-semibold px-5 py-3 rounded-full active:scale-95 transition"
              onClick={() =>
                addToCart({
                  title: "Mens Casual Premium Slim Fit T-Shirts",
                  price: 22.3,
                  category: "men's clothing",
                  image:
                    "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
                })
              }
            >
              Add to Cart
            </button>
          </div>

          <div className="relative group rounded-2xl shadow flex flex-col bg-white p-4 hover:shadow-lg transition-shadow">
            <img
              src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png"
              alt="Mens Casual Premium Slim Fit T-Shirts"
              className="w-full h-48 object-contain mb-4"
            />
            <h2 className="font-bold text-lg text-black my-2 line-clamp-2 h-12 group-hover:text-violet-600 transition-colors">
              Mens Casual Premium Slim Fit T-Shirts
            </h2>
            <div className="text-xl mb-2 font-semibold text-gray-500 group-hover:text-violet-600">
              $22.3
            </div>
            <div className="text-sm text-gray-500 mb-4 capitalize group-hover:text-violet-600">
              mens clothing
            </div>
            <button
              className="bg-violet-500 hover:bg-violet-600 text-white font-semibold px-5 py-3 rounded-full active:scale-95 transition"
              onClick={() =>
                addToCart({
                  title: "Mens Casual Premium Slim Fit T-Shirts",
                  price: 22.3,
                  category: "men's clothing",
                  image:
                    "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
                })
              }
            >
              Add to Cart
            </button>
          </div>

          <div className="relative group rounded-2xl shadow flex flex-col bg-white p-4 hover:shadow-lg transition-shadow">
            <img
              src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png"
              alt="Mens Casual Premium Slim Fit T-Shirts"
              className="w-full h-48 object-contain mb-4"
            />
            <h2 className="font-bold text-lg text-black my-2 line-clamp-2 h-12 group-hover:text-violet-600 transition-colors">
              Mens Casual Premium Slim Fit T-Shirts
            </h2>
            <div className="text-xl mb-2 font-semibold text-gray-500 group-hover:text-violet-600">
              $22.3
            </div>
            <div className="text-sm text-gray-500 mb-4 capitalize group-hover:text-violet-600">
              mens clothing
            </div>
            <button
              className="bg-violet-500 hover:bg-violet-600 text-white font-semibold px-5 py-3 rounded-full active:scale-95 transition"
              onClick={() =>
                addToCart({
                  title: "Mens Casual Premium Slim Fit T-Shirts",
                  price: 22.3,
                  category: "men's clothing",
                  image:
                    "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
                })
              }
            >
              Add to Cart
            </button>
          </div>

          <div className="relative group rounded-2xl shadow flex flex-col bg-white p-4 hover:shadow-lg transition-shadow">
            <img
              src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png"
              alt="Mens Casual Premium Slim Fit T-Shirts"
              className="w-full h-48 object-contain mb-4"
            />
            <h2 className="font-bold text-lg my-2  text-black line-clamp-2 h-12 group-hover:text-violet-600 transition-colors">
              Mens Casual Premium Slim Fit T-Shirts
            </h2>
            <div className="text-xl mb-2 font-semibold text-gray-500 group-hover:text-violet-600">
              $22.3
            </div>
            <div className="text-sm text-gray-500 mb-4 capitalize group-hover:text-violet-600">
              mens clothing
            </div>
            <button
              className="bg-violet-500 hover:bg-violet-600 text-white font-semibold px-5 py-3 rounded-full active:scale-95 transition"
              onClick={() =>
                addToCart({
                  title: "Mens Casual Premium Slim Fit T-Shirts",
                  price: 22.3,
                  category: "men's clothing",
                  image:
                    "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
                })
              }
            >
              Add to Cart
            </button>
          </div>

          <div className="relative group rounded-2xl shadow flex flex-col bg-white p-4 hover:shadow-lg transition-shadow">
            <img
              src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png"
              alt="Mens Casual Premium Slim Fit T-Shirts"
              className="w-full h-48 object-contain mb-4"
            />
            <h2 className="font-bold text-lg my-2  text-black line-clamp-2 h-12 group-hover:text-violet-600 transition-colors">
              Mens Casual Premium Slim Fit T-Shirts
            </h2>
            <div className="text-xl mb-2 font-semibold text-gray-500 group-hover:text-violet-600">
              $22.3
            </div>
            <div className="text-sm text-gray-500 mb-4 capitalize group-hover:text-violet-600">
              mens clothing
            </div>
            <button
              className="bg-violet-500 hover:bg-violet-600 text-white font-semibold px-5 py-3 rounded-full active:scale-95 transition"
              onClick={() =>
                addToCart({
                  title: "Mens Casual Premium Slim Fit T-Shirts",
                  price: 22.3,
                  category: "men's clothing",
                  image:
                    "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
                })
              }
            >
              Add to Cart
            </button>
          </div>

          <div className="relative group rounded-2xl shadow flex flex-col bg-white p-4 hover:shadow-lg transition-shadow">
            <img
              src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png"
              alt="Mens Casual Premium Slim Fit T-Shirts"
              className="w-full h-48 object-contain mb-4"
            />
            <h2 className="font-bold text-lg my-2 text-black line-clamp-2 h-12 group-hover:text-violet-600 transition-colors">
              Mens Casual Premium Slim Fit T-Shirts
            </h2>
            <div className="text-xl mb-2 font-semibold text-gray-500 group-hover:text-violet-600">
              $22.3
            </div>
            <div className="text-sm text-gray-500 mb-4 capitalize group-hover:text-violet-600">
              mens clothing
            </div>
            <button
              className="bg-violet-500 hover:bg-violet-600 text-white font-semibold px-5 py-3 rounded-full active:scale-95 transition"
              onClick={() =>
                addToCart({
                  title: "Mens Casual Premium Slim Fit T-Shirts",
                  price: 22.3,
                  category: "men's clothing",
                  image:
                    "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
                })
              }
            >
              Add to Cart
            </button>
          </div>

          <div className="relative group rounded-2xl shadow flex flex-col bg-white p-4 hover:shadow-lg transition-shadow">
            <img
              src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png"
              alt="Mens Casual Premium Slim Fit T-Shirts"
              className="w-full h-48 object-contain mb-4"
            />
            <h2 className="font-bold text-lg my-2 text-black line-clamp-2 h-12 group-hover:text-violet-600 transition-colors">
              Mens Casual Premium Slim Fit T-Shirts
            </h2>
            <div className="text-xl mb-2 font-semibold text-gray-500 group-hover:text-violet-600">
              $22.3
            </div>
            <div className="text-sm text-gray-500 mb-4 capitalize group-hover:text-violet-600">
              mens clothing
            </div>
            <button
              className="bg-violet-500 hover:bg-violet-600 text-white font-semibold px-5 py-3 rounded-full active:scale-95 transition"
              onClick={() =>
                addToCart({
                  title: "Mens Casual Premium Slim Fit T-Shirts",
                  price: 22.3,
                  category: "men's clothing",
                  image:
                    "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
                })
              }
            >
              Add to Cart
            </button>
          </div>

          <div className="relative group rounded-2xl shadow flex flex-col bg-white p-4 hover:shadow-lg transition-shadow">
            <img
              src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png"
              alt="Mens Cotton Jacket"
              className="w-full h-48 object-contain mb-4"
            />
            <h2 className="font-bold text-lg my-2  text-black line-clamp-2 h-12 group-hover:text-violet-600 transition-colors">
              Mens Cotton Jacket
            </h2>
            <div className="text-xl mb-2 font-semibold text-gray-500 group-hover:text-violet-600">
              $55.99
            </div>
            <div className="text-sm text-gray-500 mb-4 capitalize group-hover:text-violet-600">
              mens clothing
            </div>
            <button
              className="bg-violet-500 hover:bg-violet-600 text-white font-semibold px-5 py-3 rounded-full active:scale-95 transition"
              onClick={() =>
                addToCart({
                  title: "Mens Cotton Jacket",
                  price: 55.99,
                  category: "men's clothing",
                  image:
                    "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
                })
              }
            >
              Add to Cart
            </button>
          </div>
        </div>
      </main>

      <div
        className={`fixed top-0 right-0 w-1/3 max-w-full h-screen bg-white border-l border-gray-200 shadow-xl transition-transform duration-500 z-50 ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-800">Your Cart</h2>
          <button
            className="text-gray-500 hover:text-purple-500 text-2xl font-bold"
            onClick={() => setIsCartOpen(false)}
          >
            ×
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-400 mt-10">
              Your cart is empty
            </p>
          ) : (
            cartItems.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between text-black border-b pb-2"
              >
                <p className="font-semibold">{item.title}</p>
                <p className="font-semibold">${item.price}</p>
              </div>
            ))
          )}
        </div>
        <div className="px-6 py-4 border-t border-gray-200">
          <a
            className="block w-full text-center bg-violet-500 hover:bg-violet-600 text-white font-semibold py-3 rounded-full transition"
            href="/checkout"
          >
            Checkout
          </a>
        </div>
      </div>
    </div>
  );
}
