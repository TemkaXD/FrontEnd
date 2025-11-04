"use client"; 

import { useState, useEffect } from "react"; 
import { Search, Menu, Heart, ShoppingCart } from "lucide-react"; 

const Header = ({ cartCount, onCartToggle }) => (
  <header className="fixed top-0 left-0 w-full h-[11%] z-50 bg-black shadow-md">
    <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-8">
      <a href="/products">
        <img
          className="h-14 cursor-pointer"
          src="https://media.discordapp.net/attachments/1355518866096259112/1424935229000519770/Frame_2_1.png?ex=68e5c1d8&is=68e47058&hm=6720f0b9f6ed484cdc581296e633e0e8493f0b5bd8050f6c50205cfa89564581&=&format=webp&quality=lossless&width=236&height=74"
          alt="Logo"
        />
      </a>
      <div className="flex items-center space-x-2 border rounded-full p-2 bg-white max-w-lg flex-grow mx-6">
        <div className="flex items-center bg-white rounded-l-full border-r pr-3">
          <button className="flex items-center text-sm font-semibold text-gray-700 p-1 px-3">
            <Menu className="w-4 h-4 mr-1" /> Ангилал
          </button>
          <div className="flex items-center text-sm font-semibold text-gray-700 p-1 px-3 border-l">
            <span className="text-orange-500 font-bold text-lg mr-1">A</span> Amazon
          </div>
        </div>
        <input
          type="text"
          placeholder="Бүтээгдэхүүн хайх..."
          className="bg-transparent text-black outline-none text-sm flex-grow"
        />
        <button className="p-1 bg-white text-black rounded-full">
          <Search className="w-5 h-5" />
        </button>
      </div>
      <div className="flex items-center space-x-4 text-white">
        <button className="w-10 h-10 flex items-center justify-center bg-black hover:bg-gray-700 rounded-full">
          <Heart className="w-5 h-5" />
        </button>
        <button
          className="relative w-10 h-10 flex items-center justify-center bg-black hover:bg-gray-700 rounded-full"
          onClick={onCartToggle}
        >
          <ShoppingCart className="w-5 h-5" />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-violet-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </button>
        <button className="w-10 h-10 flex items-center justify-center bg-black hover:bg-gray-700 rounded-full">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2a5 5 0 110 10 5 5 0 010-10zm0 12c3.31 0 6 1.79 6 4v2H6v-2c0-2.21 2.69-4 6-4z" />
          </svg>
        </button>
      </div>
    </div>
  </header>
);

export default function Layout({ children }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [valorantThemes, setValorantThemes] = useState([]);

  const addToCart = (item) => setCartItems([...cartItems, item]);

  const products = [
    { name: "Logitech Superlight", type: "400,000₮", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZhRb-c7SJ7qhtVxniYNmPvUe8nXFy_cfOOw&s" },
    { name: "BlueFinger Keyboard", type: "400,000₮", img: "https://m.media-amazon.com/images/I/61QFpMiJxPL.jpg" },
    { name: "Nitro KG24 Monitor", type: "400,000₮", img: "https://m.media-amazon.com/images/I/71yo3bmyBnL._UF350,350_QL50_.jpg" },
    { name: "HyperX Cloud 2 Wireless", type: "400,000₮", img: "https://www.hitech.mn/_next/image?url=https%3A%2F%2Fhitech-bc-main.s3.ap-southeast-1.amazonaws.com%2Fd62cbe25-0c29-41e7-a44d-000a3aed1250.jpg&w=3840&q=75" },
    { name: "Razer Pad", type: "400,000₮", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFQj13R2-RXzjTOwrlPioaNoN7bxjIzvqN9yWlDcHyHJRVbMFDj_K15O6PityjVQJ8S28&usqp=CAU" },
  ];

  useEffect(() => {
    const fetchThemes = async () => {
      try {
        const response = await fetch("https://valorant-api.com/v1/bundles");
        const data = await response.json();
        const sliced = data.data.slice(0, 5);
        setValorantThemes(
          sliced.map((theme) => ({
            name: theme.displayName || "Valoran Bundles",
            type: "Valorant Bundles",
            img: theme.displayIcon || "https://via.placeholder.com/200",
          }))
        );
      } catch (error) {
        console.error("Valorant themes татахад алдаа гарлаа:", error);
      }
    };
    fetchThemes();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header cartCount={cartItems.length} onCartToggle={() => setIsCartOpen(!isCartOpen)} />
      <main className="max-w-7xl mx-auto px-8 pt-28">
        <div className="relative w-full h-[380px] rounded-lg overflow-hidden mb-10 shadow-lg">
          <img
            src="https://bsmedia.business-standard.com/_media/bs/img/article/2024-06/10/full/1717999969-7945.jpg"
            alt="Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-1/2 left-10 transform -translate-y-1/2 text-white">
            <h1 className="text-4xl font-bold mb-4 drop-shadow-lg"> Хүссэн бараагаа </h1>
            <p className="text-lg mb-6 drop-shadow-md">Захиалаад аваарай</p>
            <button className="px-6 py-3 bg-black bg-opacity-70 text-white rounded-full flex items-center gap-2 hover:bg-opacity-90 transition">
              Захиалах <span>→</span>
            </button>
          </div>
        </div>
        <div className="w-full mb-10">
          <img
            src="https://media.discordapp.net/attachments/1355518866096259112/1424930157369622668/product.png?ex=68e5bd1f&is=68e46b9f&hm=c5a9acbfc435b14ccd625546210dc75cb3b8bff2a254c89f8bb18397d42281d8&=&format=webp&quality=lossless&width=1860&height=240"
            alt="Product Categories"
            className="w-full rounded-lg"
          />
        </div>
        <div className="flex space-x-7 overflow-x-auto pb-4">
          {products.map((product, idx) => (
            <div key={idx} className="relative min-w-[200px] bg-white rounded-lg shadow-md flex-shrink-0">
              <img src={product.img} alt={product.name} className="w-full h-36 object-cover rounded-t-lg" />
              <div className="p-4">
                <h2 className="font-bold text-lg text-black">{product.name}</h2>
                <p className="text-gray-500 text-sm">{product.type}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex space-x-7 overflow-x-auto pb-4 mt-6">
          {valorantThemes.map((theme, idx) => (
            <div key={`theme-${idx}`} className="relative min-w-[220px] bg-white rounded-lg shadow-md flex-shrink-0">
              <img src={theme.img} alt={theme.name} className="w-full h-36 object-cover rounded-t-lg" />
              <div className="p-4">
                <h2 className="font-bold text-lg text-black">{theme.name}</h2>
                <p className="text-gray-500 text-sm">{theme.type}</p>
              </div>
            </div>
          ))}
        </div>
        {children}
      </main>
      {isCartOpen && (
        <div className="fixed top-0 right-0 w-1/3 max-w-full h-screen bg-white border-l border-gray-200 shadow-xl z-50">
          <div className="flex items-center justify-between px-6 py-4 border-b">
            <h2 className="text-xl font-bold text-gray-800">Сагс</h2>
            <button
              className="text-gray-500 hover:text-purple-500 text-2xl font-bold"
              onClick={() => setIsCartOpen(false)}
            >
              ×
            </button>
          </div>
          <div className="p-6">
            {cartItems.length === 0 ? (
              <p className="text-gray-400">Сагс хоосон байна</p>
            ) : (
              cartItems.map((item, idx) => (
                <div key={idx} className="flex justify-between mb-2">
                  <span>{item.name}</span>
                  <span>{item.price}₮</span>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}
