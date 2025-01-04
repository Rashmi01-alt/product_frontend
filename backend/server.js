// const express = require("express");
// const cors = require("cors");
// const { connectDB } = require("./config/db");
// const productRoutes = require("./routes/productRoutes");

// const app = express();
// const PORT = process.env.PORT || 4000;



// connectDB();
// app.use(cors());
// app.use(express.json());

// app.use("/products", productRoutes);

// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
const express = require("express");
const connectDB = require("./config/db");
require("dotenv").config(); // Load environment variables

const app = express();

// Connect to Database
connectDB();

app.use(express.json());

// Routes
app.use("/api/products", require("./routes/productRoutes"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
