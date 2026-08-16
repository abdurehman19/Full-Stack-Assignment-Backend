import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();

const app = express();


// Database
connectDB();


// Middleware
app.use(cors());
app.use(express.json());


// Routes
app.use(
  "/api/products",
  productRoutes
);


// Test
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "SHOP.CO Backend is running 🚀",
  });
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Backend running on http://localhost:${PORT}`
  );
});