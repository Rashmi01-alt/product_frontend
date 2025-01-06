
// correct code for centrally placed cards
// import { fetchProducts } from "../../utils/api";
// import ProductCard from "../../components/ProductCard";
// // import SearchBar from "../../components/SearchBar";

// export default async function ProductList() {
//   // Fetch data in the component itself
//   const products = await fetchProducts();

//   return (
//     <div className="flex flex-col items-center p-4">
//       {/* Search Bar Component */}
//       {/* <SearchBar /> */}

//       {/* Product Grid */}
//       <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mt-8">
//         {products.map((product) => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>
//     </div>
//   );
// }




// correct code for widely placed cards stretched to the full width
import { fetchProducts } from "../../utils/api";
 import ProductCard from "../../components/ProductCard";

export default async function ProductList() {
  let products = [];

  try {
    // Fetch products from API
    products = await fetchProducts();
  } catch (error) {
    console.error("Failed to fetch products:", error.message);
    return (
      <div className="text-center text-red-500 mt-10">
        Failed to load products. Please try again later.
      </div>
    );
  }

  // Fallback if products is undefined or null
  if (!products || products.length === 0) {
    return (
      <div className="text-center text-gray-600 mt-10">
        No products found. Please add some products.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {products.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
}
