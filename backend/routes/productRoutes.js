const express = require("express");
const {
  getProducts,
  getProductById,
  searchProducts,
  addProduct
} = require("../controllers/productController");
const router = express.Router();

router.post("/add", addProduct);


router.get("/", getProducts);

router.get("/search", searchProducts);
router.get("/:id", getProductById);
 
module.exports = router;
