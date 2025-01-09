// import Link from "next/link";

// export default function ProductCard({ product }) {
//   return (
//     <Link href={`/product/${product.id}`}>
//       <div className="border border-gray-200 rounded-lg shadow-md p-4 hover:scale-105 transition-transform duration-200">
//         <img
//           src={product.image}
//           alt={product.name}
//           className="w-full h-48 object-cover rounded-md mb-4"
//         />
//         <div className="flex flex-col items-start">
//           <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
//           <p className="text-gray-700 font-medium mb-2">
//             Price: ${product.price}
//           </p>
//           <p className="text-sm text-gray-600">Category: {product.category}</p>
//         </div>
//       </div>
//     </Link>
//   );
// }





import Link from "next/link";

export default function ProductCard({ product, detailedView = false }) {
  return detailedView ? (
    <div className="max-w-2xl mx-auto p-6 border border-gray-200 bg-orange-100 rounded-lg shadow-md">
      <img
        src={product.image || "/placeholder-image.jpg"}
        alt={product.name}
        className="w-full h-64 object-cover rounded mb-4"
      />
      <h1 className="text-2xl text-black font-bold mb-2">{product.name}</h1>
      <p className="text-gray-600 mb-4">Category: {product.category}</p>
      <p className="text-green-600 font-semibold text-lg mb-4">
        ${product.price}
      </p>
      <p className="text-gray-800">
        {product.description || "No description available."}
      </p>
    </div>
  ) : (
    <Link href={`/product/${product._id}`}>
      <div className="border border-gray-200 rounded-lg shadow-md p-4 bg-white transform transition-transform hover:scale-105 hover:bg-orange-200 duration-100">
        <img
          src={product.image || "/placeholder-image.jpg"}
          alt={product.name}
          className="w-full h-64 object-cover rounded-md mb-4"
        />
        <div className="flex flex-col items-start">
          <h3 className="text-lg text-black font-semibold mb-2">
            {product.name}
          </h3>
          <p className="text-gray-700 font-medium mb-2">
            Price: ${product.price}
          </p>
          <p className="text-sm text-gray-600">Category: {product.category}</p>
        </div>
      </div>
    </Link>
  );
}
