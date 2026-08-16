import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();

const app = express();


// =====================================================
// DATABASE
// =====================================================

connectDB();


// =====================================================
// MIDDLEWARE
// =====================================================

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());


// =====================================================
// ROUTES
// =====================================================

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "SHOP.CO Backend is running 🚀",
  });
});


app.use(
  "/api/products",
  productRoutes
);


// =====================================================
// 404
// =====================================================

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});


// =====================================================
// ERROR HANDLER
// =====================================================

app.use(
  (error, req, res, next) => {

    console.error(
      "Server Error:",
      error
    );

    res.status(500).json({
      success: false,
      message: "Internal server error",
    });

  }
);


// =====================================================
// SERVER
// =====================================================

const PORT =
  process.env.PORT || 5000;

app.listen(PORT, () => {

  console.log(
    `Backend running on http://localhost:${PORT}`
  );

});