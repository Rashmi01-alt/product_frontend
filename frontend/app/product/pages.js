import { fetchProducts } from "../../utils/api";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";

export default async function ProductList() {
  // Fetch data in the component itself
  const products = await fetchProducts();

  return (
    <div className="flex flex-col items-center">
      <SearchBar />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
