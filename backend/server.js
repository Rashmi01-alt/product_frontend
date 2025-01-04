
const express = require("express");
const app = express();

require("dotenv").config(); // Load environment variables

const connectDB = require("./config/db");


console.log(process.env.MONGO_URI);

// Connect to Database
connectDB();

app.use(express.json());

// Routes
app.use("/api/products", require("./routes/productRoutes"));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
