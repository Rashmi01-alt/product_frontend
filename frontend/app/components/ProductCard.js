import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <Link href={`/product/${product.id}`}>
      <div className="border border-gray-200 rounded-lg shadow-md p-4 hover:scale-105 transition-transform duration-200">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-40 object-cover rounded-md mb-4"
        />
        <div className="flex flex-col items-start">
          <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
          <p className="text-gray-700 font-medium mb-2">
            Price: ${product.price}
          </p>
          <p className="text-sm text-gray-600">Category: {product.category}</p>
        </div>
      </div>
    </Link>
  );
}
