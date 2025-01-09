
"use client";

import { useState, useRef, useEffect } from "react";
import { searchProducts } from "../utils/api";
import { FiSearch } from "react-icons/fi";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const suggestionBoxRef = useRef(null); // Reference to the suggestion box

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
    window.location.href = `/product/${id}`; // Use browser navigation fallback
  };

  // Close the suggestion box when clicking outside
  const handleClickOutside = (event) => {
    if (
      suggestionBoxRef.current &&
      !suggestionBoxRef.current.contains(event.target)
    ) {
      setResults([]);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-full">
      {/* Search Input with Icon */}
      <div className="flex items-center border bg-white border-gray-300 rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-blue-400">
        <FiSearch className="text-gray-500 mx-3" size={20} />
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="Search for products..."
          className="w-full p-2 text-gray-800 placeholder-gray-500 focus:outline-none"
        />
      </div>
      {/* Search Results Dropdown */}
      {results.length > 0 ? (
        <div
          ref={suggestionBoxRef} // Attach ref to the suggestion box
          className="absolute left-0 right-0 bg-white border border-gray-200 rounded-md mt-2 max-h-40 overflow-y-auto shadow-lg z-50"
        >
          {results.map((result) => (
            <div
              key={result._id}
              onClick={() => handleRedirect(result._id)}
              className="p-2 cursor-pointer hover:bg-gray-100 text-gray-800"
            >
              {result.name}
            </div>
          ))}
        </div>
      ) : (
        query.trim() && (
          <div
            ref={suggestionBoxRef}
            className="absolute left-0 right-0 bg-white border border-gray-200 rounded-md mt-2 max-h-40 overflow-y-auto shadow-lg z-50"
          >
            <div className="p-2 text-gray-500">No products found</div>
          </div>
        )
      )}
    </div>
  );
}

// import { useState, useRef, useEffect } from "react";
// import { searchProducts } from "../utils/api";
// import { FiSearch } from "react-icons/fi";

// export default function SearchBar() {
//   const [query, setQuery] = useState("");
//   const [results, setResults] = useState([]);
//   const [clickedOutside, setClickedOutside] = useState(false); // Track outside clicks
//   const suggestionBoxRef = useRef(null); // Reference to the suggestion box

//   const handleSearch = async (e) => {
//     const searchQuery = e.target.value;
//     setQuery(searchQuery);

//     if (searchQuery.trim()) {
//       const data = await searchProducts(searchQuery);
//       setResults(data);
//     } else {
//       setResults([]);
//     }
//   };

//   const handleRedirect = (id) => {
//     window.location.href = `/product/${id}`; // Use browser navigation fallback
//   };

//   // Close the suggestion box when clicking outside
//   const handleClickOutside = (event) => {
//     if (
//       suggestionBoxRef.current &&
//       !suggestionBoxRef.current.contains(event.target)
//     ) {
//       setClickedOutside(true); // Set to true when clicked outside
//       setResults([]); // Clear results when clicked outside
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   useEffect(() => {
//     if (!clickedOutside && query.trim()) {
//       const fetchResults = async () => {
//         const data = await searchProducts(query);
//         setResults(data);
//       };

//       fetchResults();
//     }
//   }, [query, clickedOutside]);

//   return (
//     <div className="relative w-full">
//       {/* Search Input with Icon */}
//       <div className="flex items-center border bg-white border-gray-300 rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-blue-400">
//         <FiSearch className="text-gray-500 mx-3" size={20} />
//         <input
//           type="text"
//           value={query}
//           onChange={handleSearch}
//           placeholder="Search for products..."
//           className="w-full p-2 text-gray-800 placeholder-gray-500 focus:outline-none"
//         />
//       </div>
//       {/* Search Results Dropdown */}
//       {(results.length > 0 || query.trim()) && (
//         <div
//           ref={suggestionBoxRef}
//           className="absolute left-0 right-0 bg-white border border-gray-200 rounded-md mt-2 max-h-40 overflow-y-auto shadow-lg z-50"
//         >
//           {results.length > 0 ? (
//             results.map((result) => (
//               <div
//                 key={result.id}
//                 onClick={() => handleRedirect(result.id)}
//                 className="p-2 cursor-pointer hover:bg-gray-100 text-gray-800"
//               >
//                 {result.name}
//               </div>
//             ))
//           ) : (
//             <div className="p-2 text-gray-600 text-center">
//               No products found
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

