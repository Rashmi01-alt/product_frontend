// import { fetchProductById } from "../../utils/api";

// export default async function ProductDetails({ params }) {
//   const { id } = await params;

//   let product;

//   // Ensure fetchProductById is awaited correctly
//   try {
//     product = await fetchProductById(id);
//   } catch (error) {
//     console.error(`Failed to fetch product with ID ${id}:`, error.message);
//     return (
//       <div className="text-center mt-10 text-red-600">
//         Error loading product details. Please try again later.
//       </div>
//     );
//   }

//   // If no product is found
//   if (!product) {
//     return (
//       <div className="text-center mt-10 text-red-600">
//         Product not found.
//       </div>
//     );
//   }

//   return (
//     <div className="flex flex-col items-center mt-10 max-w-lg mx-auto p-4 border rounded shadow-lg">
//       <img
//         src={product.image || "/fallback-image.jpg"} // Fallback image for missing product image
//         alt={product.name}
//         className="w-full h-auto rounded mb-4"
//       />
//       <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
//       <p className="text-gray-600 mb-2">Category: {product.category}</p>
//       <p className="text-lg font-semibold text-green-600 mb-2">
//         ${product.price}
//       </p>
//       <p className="text-gray-700">{product.description}</p>
//     </div>
//   );
// }

import { fetchProductById } from "../../utils/api";

const ProductDetail = async ({ params }) => {
  const id = params?.id;

  if (!id) {
    return (
      <div className="text-center text-red-500 mt-10">
        Invalid product ID. Please check the URL.
      </div>
    );
  }

  let product = null;

  try {
    // Fetch product details
    product = await fetchProductById(id);
  } catch (error) {
    console.error(`Failed to fetch product with ID ${id}:`, error.message);
    return (
      <div className="text-center text-red-500 mt-10">
        Failed to load product details. Please try again later.
      </div>
    );
  }

  // Handle the case where the product is not found
  if (!product) {
    return (
      <div className="text-center text-gray-600 mt-10">
        Product not found. Please check the ID.
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <img
        src={product.image || "/placeholder-image.jpg"}
        alt={product.name}
        className="w-full h-64 object-cover rounded mb-4"
      />
      <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
      <p className="text-gray-600 mb-4">Category: {product.category}</p>
      <p className="text-green-600 font-semibold text-lg mb-4">
        ${product.price}
      </p>
      <p className="text-gray-800">
        {product.description || "No description available."}
      </p>
    </div>
  );
};

export default ProductDetail;
