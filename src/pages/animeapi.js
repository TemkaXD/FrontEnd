"use client";
import { useEffect, useState } from "react";

export default function Page() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("naruto");
  const [isGridView, setIsGridView] = useState(true);

  const fetchAnime = async (query = "naruto") => {
    try {
      const res = await fetch(
        `https://api.myanimelist.net/v2/anime?q=${query}&limit=20`,
        {
          headers: {
            "X-MAL-CLIENT-ID": "ТАНЫ_CLIENT_ID_ЭНД", 
          },
        }
      );

      if (!res.ok) throw new Error("Failed to fetch anime");
      const result = await res.json();
      setData(result.data || []);
    } catch (err) {
      console.error("Error fetching Anime:", err);
    }
  };

  useEffect(() => {
    fetchAnime(search);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchAnime(search);
  };

  return (
    <div className="min-h-screen bg-black p-5 flex flex-col items-center">
      <form
        onSubmit={handleSearch}
        className="mb-8 flex items-center justify-between w-full"
      >
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Anime..."
          className="flex-grow mb-4 p-2 rounded border shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white bg-gray-800"
        />
        <button
          type="submit"
          className="ml-4 px-5 py-3 bg-yellow-400 text-black font-medium rounded-lg shadow-md hover:bg-yellow-300 transition-transform transform hover:scale-105"
        >
          Search
        </button>
        <button
          type="button"
          onClick={() => setIsGridView((prev) => !prev)}
          className="ml-4 px-5 py-3 bg-white text-black font-medium rounded-lg shadow-md hover:bg-yellow-100 transition-transform transform hover:scale-105"
        >
          {isGridView ? "List View" : "Grid View"}
        </button>
      </form>

      {data.length > 0 ? (
        isGridView ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 m-4 w-full">
            {data.map((item) => (
              <div
                key={item.node.id}
                className="border-2 text-black bg-white shadow rounded-lg p-4 text-center hover:shadow-xl transition"
              >
                <img
                  src={item.node.main_picture?.medium}
                  alt={item.node.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <p className="font-bold mt-2 capitalize text-sm">
                  {item.node.title}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4 m-4 w-full">
            {data.map((item) => (
              <div
                key={item.node.id}
                className="flex items-center border-2 text-black bg-white shadow rounded-lg p-4 hover:shadow-xl transition"
              >
                <img
                  src={item.node.main_picture?.medium}
                  alt={item.node.title}
                  className="w-32 h-32 object-cover rounded-lg mr-4"
                />
                <div>
                  <p className="font-bold">{item.node.title}</p>
                  <p className="text-sm text-gray-600">ID: {item.node.id}</p>
                </div>
              </div>
            ))}
          </div>
        )
      ) : (
        <p className="text-center text-white font-bold mt-10">No Anime found</p>
      )}
    </div>
  );
}
