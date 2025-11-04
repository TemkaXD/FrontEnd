"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [isGridView, setIsGridView] = useState(true);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=50");
        const result = await res.json();
        const details = await Promise.all(
          result.results.map((p) => fetch(p.url).then((res) => res.json()))
        );

        setData(details);
      } catch (err) {
        console.error("Error fetching Pokemon:", err);
      }
    };

    fetchPokemon();
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
          placeholder="Search Pokémon..."
          className="flex-grow mb-4 p-2 rounded border shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white bg-gray-800"
        />
        <button
          onClick={() => setIsGridView((prev) => !prev)}
          className="ml-4 flex items-center px-5 py-3 bg-white text-black font-medium rounded-lg shadow-md hover:bg-yellow-100 transition-transform transform hover:scale-105"
        >
          {isGridView ? "List View" : "Grid View"}
        </button>
      </div>

      {filteredData.length > 0 ? (
        isGridView ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 m-4 w-full">
            {filteredData.map((pokemon) => (
              <button
                key={pokemon.id}
                onClick={() => router.push(`/pokemon/${pokemon.id}`)}
                className="border-2 text-black bg-white shadow rounded-lg p-4 text-center hover:shadow-xl transition"
              >
                <img
                  src={
                    pokemon?.sprites?.other?.["official-artwork"]?.front_default ||
                    pokemon?.sprites?.front_default ||
                    "https://via.placeholder.com/150"
                  }
                  alt={pokemon.name}
                  className="w-full h-64 rounded-xl object-contain bg-gray-100"
                />
                <p className="font-bold mt-2 capitalize">{pokemon.name}</p>
                <p>Height: {pokemon.height}</p>
                <p>Weight: {pokemon.weight}</p>
                <p className="text-sm text-gray-600">
                  {pokemon.types.map((t) => t.type.name).join(", ")}
                </p>
              </button>
            ))}
          </div>
        ) : (
          <div className="space-y-4 m-4 w-full">
            {filteredData.map((pokemon) => (
              <div
                key={pokemon.id}
                className="flex flex-col sm:flex-row items-start border-2 text-black bg-white shadow rounded-lg p-4 hover:shadow-xl transition"
              >
                <img
                  src={
                    pokemon?.sprites?.other?.["official-artwork"]?.front_default ||
                    pokemon?.sprites?.front_default ||
                    "https://via.placeholder.com/150"
                  }
                  alt={pokemon.name}
                  className="w-32 h-32 rounded-xl object-contain bg-gray-100 mb-4 sm:mb-0 sm:mr-4"
                />
                <div>
                  <p className="font-bold capitalize">{pokemon.name}</p>
                  <p>Height: {pokemon.height}</p>
                  <p>Weight: {pokemon.weight}</p>
                  <p className="text-sm text-gray-600">
                    {pokemon.types.map((t) => t.type.name).join(", ")}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )
      ) : (
        <p className="text-center text-white font-bold mt-10">No Pokémon found</p>
      )}

      <button className="bg-yellow-400 rounded-2xl p-2 mx-auto mt-4 cursor-pointer">
        Шинэ Pokémon нэмэх
      </button>
    </div>
  );
}
