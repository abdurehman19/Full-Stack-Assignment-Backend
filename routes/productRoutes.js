import express from "express";

import {
  getProducts,
  getProductById,
  createProduct,
  deleteProduct,
} from "../controllers/productController.js";

const router = express.Router();


// GET /api/products
router.get("/", getProducts);


// GET /api/products/:id
router.get("/:id", getProductById);


// POST /api/products
router.post("/", createProduct);


// DELETE /api/products/:id
router.delete("/:id", deleteProduct);


export default router;