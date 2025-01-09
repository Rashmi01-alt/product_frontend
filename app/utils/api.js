import axios from "axios";

const BASE_URL = "https://product-backend-rncp.onrender.com";

// Fetch all products
export const fetchProducts = async () => {
  try {
    const { data } = await axios.get(`${BASE_URL}/api/products/`);
    console.log("Fetched data:", data);
    return data;
  } catch (error) {
    console.error("Error fetching products:", error.message);
    throw error;
  }
};

export const searchProducts = async (query) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/api/products/search`, {
      params: { query },
    });
    return data;
  } catch (error) {
    // console.error("Error fetching search results:", error.message);
    return [];
  }
};

// Fetch a product by ID
export const fetchProductById = async (id) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/api/products/${id}`);
    return data;
  } catch (error) {
    console.error(`Error fetching product with ID ${id}:`, error.message);
    throw error;
  }
};

// Search for products

