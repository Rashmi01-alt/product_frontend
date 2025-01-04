import { fetchProductById } from "../../utils/api";

export default async function ProductDetails({ params }) {
  if (!params?.id) {
    return <div className="text-center mt-10">Invalid product ID.</div>;
  }

  const product = await fetchProductById(params.id).catch((error) => {
    console.error("Failed to fetch product:", error.message);
    return null;
  });

  if (!product) {
    return <div className="text-center mt-10">Product not found.</div>;
  }

  return (
    <div className="flex flex-col items-center mt-10 max-w-lg mx-auto p-4 border rounded shadow-lg">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-auto rounded mb-4"
      />
      <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
      <p className="text-gray-600 mb-2">Category: {product.category}</p>
      <p className="text-lg font-semibold text-green-600 mb-2">
        ${product.price}
      </p>
      <p className="text-gray-700">{product.description}</p>
    </div>
  );
}

export const dynamic = "force-dynamic"; // Enables dynamic rendering
