"use client";
import { useEffect, useState } from "react";

export default function Page() {
  const [data, setData] = useState([]);
  const [isGridView, setIsGridView] = useState(true);

  const fetchCats = async () => {
    try {
      const requests = Array.from({ length: 20 }, () =>
        fetch("https://api.thecatapi.com/v1/images/search").then((res) =>
          res.json()
        )
      );
      const results = await Promise.all(requests);

      
      const cats = results.map((r) => r[0]);
      setData(cats);
    } catch (err) {
      console.error("Error fetching Cats:", err);
    }
  };

  useEffect(() => {
    fetchCats();
  }, []);

  return (
    <div className="min-h-screen bg-black p-5 flex flex-col items-center">
      <div className="mb-8 flex items-center justify-between w-full">
        <button
          onClick={() => setIsGridView((prev) => !prev)}
          className="ml-auto flex items-center px-5 py-3 bg-white text-black font-medium rounded-lg shadow-md hover:bg-yellow-100 transition-transform transform hover:scale-105"
        >
          {isGridView ? "List View" : "Grid View"}
        </button>
      </div>

      {data.length > 0 ? (
        isGridView ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 m-4 w-full">
            {data.map((cat, index) => (
              <div
                key={cat.id || index}
                className="border-2 text-black bg-white shadow rounded-lg p-4 text-center hover:shadow-xl transition"
              >
                <img
                  src={cat.url}
                  alt="Cat"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <p className="mt-2 text-sm text-gray-600">ID: {cat.id}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-4 m-4 w-full">
            {data.map((cat, index) => (
              <div
                key={cat.id || index}
                className="flex items-center border-2 text-black bg-white shadow rounded-lg p-4 hover:shadow-xl transition"
              >
                <img
                  src={cat.url}
                  alt="Cat"
                  className="w-32 h-32 object-cover rounded-lg mr-4"
                />
                <div>
                  <p className="font-bold">Cat ID: {cat.id}</p>
                  <p className="text-sm text-gray-600">
                    Size: {cat.width} × {cat.height}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )
      ) : (
        <p className="text-center text-white font-bold mt-10">No Cats found</p>
      )}

      <button
        onClick={fetchCats}
        className="bg-yellow-400 rounded-2xl p-2 mx-auto mt-4 cursor-pointer"
      >
        Шинэ Cat нэмэх
      </button>
    </div>
  );
}
