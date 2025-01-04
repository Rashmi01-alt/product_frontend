import axios from "axios";

const BASE_URL = "http://localhost:5000";

export const fetchProducts = async () => {
  const { data } = await axios.get(`${BASE_URL}/products`);
  return data;
};

export const fetchProductById = async (id) => {
  const { response } = await axios.get(`${BASE_URL}/products/${id}`);
   if (!response.ok) {
     throw new Error("Failed to fetch product");
   }
   return response.json();
};

export const searchProducts = async (query) => {
  const { data } = await axios.get(`${BASE_URL}/products/search`, {
    params: { query },
  });
  return data;
};
