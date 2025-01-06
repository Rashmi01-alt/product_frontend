
const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config(); // Load environment variables
const connectDB = require("./config/db");


// Connect to Database
connectDB();

app.use(cors("*"));
app.use(express.json());

// Routes
app.use("/api/products", require("./routes/productRoutes"));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
