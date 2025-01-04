import { useState } from "react";
import { searchProducts } from "../../utils/api";
import { useRouter } from "next/router";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const router = useRouter();

  const handleSearch = async (e) => {
    const searchQuery = e.target.value;
    setQuery(searchQuery);

    if (searchQuery.trim()) {
      const data = await searchProducts(searchQuery);
      setResults(data);
    } else {
      setResults([]);
    }
  };

  const handleRedirect = (id) => {
    router.push(`/product/${id}`);
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search for products..."
        className="w-full p-2 border border-gray-300 rounded-md"
      />
      <div className="mt-2 bg-white border border-gray-200 rounded-md">
        {results.map((result) => (
          <div
            key={result.id}
            onClick={() => handleRedirect(result.id)}
            className="p-2 cursor-pointer hover:bg-gray-100"
          >
            {result.name}
          </div>
        ))}
      </div>
    </div>
  );
}
