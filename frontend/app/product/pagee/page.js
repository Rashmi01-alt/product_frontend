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
import { fetchProducts } from "../../utils/api";

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
        <div
          key={product.id}
          className="border shadow-lg p-4 rounded hover:scale-105 transition-transform"
        >
          <img
            src={product.image || "/placeholder-image.jpg"} // Use placeholder if image URL is missing
            alt={product.name}
            className="w-full h-40 object-cover rounded mb-4"
          />
          <h2 className="text-lg font-bold">{product.name}</h2>
          <p className="text-gray-600">Category: {product.category}</p>
          <p className="text-green-600 font-semibold">${product.price}</p>
        </div>
      ))}
    </div>
  );
}
