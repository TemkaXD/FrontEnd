"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; 

export default function Gokuapi() {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [isGridView, setIsGridView] = useState(true);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const res = await fetch(process.env.NEXT_PUBLIC_DRAGONBALL_API);
        const result = await res.json();
        setData(result.items || result); 
      } catch (err) {
        console.error("Error fetching Dragon Ball characters:", err);
      }
    };

    fetchCharacters();
  }, []);

  const filteredData = data.filter((item) =>
    item?.name?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black p-5 flex flex-col items-center">
      <div className="mb-8 flex items-center justify-between w-full">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
          className="flex-grow mb-4 p-2 rounded border shadow-lg focus:outline-none focus:ring-2 focus:ring-red-200 text-white bg-gray-800"
        />
        <button
          onClick={() => setIsGridView((prev) => !prev)}
          className="ml-4 flex items-center px-5 py-3 bg-white text-black font-medium rounded-lg shadow-md hover:bg-blue-100 transition-transform transform hover:scale-105"
        >
          {isGridView ? "List View" : "Grid View"}
        </button>
      </div>

      {filteredData.length > 0 ? (
        isGridView ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 m-4 w-full">
            {filteredData.map((item) => (
              <button
                key={item.id}
                onClick={() => router.push(`/character/${item.id}`)}
                className="border-2 text-black bg-white shadow rounded-lg p-4 text-center hover:shadow-xl transition"
              >
                <img
                  src={item?.image || "https://via.placeholder.com/150"}
                  alt={item.name || "Character"}
                  className="w-full h-64 rounded-xl object-cover"
                />
                <p className="font-bold mt-2">{item.name}</p>
                <p>{item.race}</p>
                <p className="font-bold">{item.gender}</p>
                <p className="text-sm text-gray-600">{item.affiliation}</p>
              </button>
            ))}
          </div>
        ) : (
          <div className="space-y-4 m-4 w-full">
            {filteredData.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row items-start border-2 text-black bg-white shadow rounded-lg p-4 hover:shadow-xl transition"
              >
                <img
                  src={item?.image || "https://via.placeholder.com/150"}
                  alt={item.name || "Character"}
                  className="w-32 h-32 rounded-xl object-cover mb-4 sm:mb-0 sm:mr-4"
                />
                <div>
                  <p className="font-bold">{item.name}</p>
                  <p>{item.race}</p>
                  <p className="font-bold">{item.gender}</p>
                  <p className="text-sm text-gray-600">{item.affiliation}</p>
                </div>
              </div>
            ))}
          </div>
        )
      ) : (
        <p className="text-center text-white font-bold mt-10">No characters found</p>
      )}

      
    </div>
  );
}
