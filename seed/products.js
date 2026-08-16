import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "../models/Product.js";

dotenv.config();

const products = [
  {
    name: "T-shirt with Tape Details",
    category: "T-Shirts",
    price: 120,
    oldPrice: null,
    discount: null,
    rating: 4.5,
    reviews: 456,
    description:
      "A comfortable and stylish T-shirt with premium cotton fabric and modern tape details.",
    image: ["/asstes/product/t-shirt-2.jpeg"],
    colors: ["#111111", "#FFFFFF", "#556B2F"],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    stock: 50,
    isActive: true,
  },

  {
    name: "Skinny Fit Jeans",
    category: "Jeans",
    price: 240,
    oldPrice: 260,
    discount: 20,
    rating: 3.5,
    reviews: 320,
    description:
      "Modern skinny fit jeans designed for a comfortable and stylish everyday look.",
    image: ["/asstes/product/t-shirt-4.jpeg"],
    colors: ["#1F2937", "#374151"],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    stock: 35,
    isActive: true,
  },

  {
    name: "Checkered Shirt",
    category: "Shirts",
    price: 180,
    oldPrice: null,
    discount: null,
    rating: 4.5,
    reviews: 410,
    description:
      "Classic checkered shirt made with comfortable fabric for everyday wear.",
    image: ["/asstes/product/t-shirt-2.jpeg"],
    colors: ["#991B1B", "#111827"],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    stock: 40,
    isActive: true,
  },

  {
    name: "Sleeve Striped T-shirt",
    category: "T-Shirts",
    price: 130,
    oldPrice: 160,
    discount: 30,
    rating: 4.5,
    reviews: 250,
    description:
      "A casual striped T-shirt with a clean and modern design.",
    image: ["/asstes/product/t-shirt-4.jpeg"],
    colors: ["#111111", "#FFFFFF"],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    stock: 45,
    isActive: true,
  },

  {
    name: "Vertical Striped Shirt",
    category: "Shirts",
    price: 212,
    oldPrice: null,
    discount: null,
    rating: 4.5,
    reviews: 300,
    description:
      "Vertical striped shirt with a relaxed and fashionable design.",
    image: ["/asstes/product/t-shirt-2.jpeg"],
    colors: ["#556B2F", "#FFFFFF"],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    stock: 30,
    isActive: true,
  },

  {
    name: "Courage Graphic T-shirt",
    category: "T-Shirts",
    price: 145,
    oldPrice: null,
    discount: null,
    rating: 4.0,
    reviews: 220,
    description:
      "Graphic T-shirt featuring a bold casual design.",
    image: ["/asstes/product/t-shirt-4.jpeg"],
    colors: ["#F97316", "#111111"],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    stock: 25,
    isActive: true,
  },

  {
    name: "Loose Fit Bermuda Shorts",
    category: "Shorts",
    price: 80,
    oldPrice: null,
    discount: null,
    rating: 4.5,
    reviews: 180,
    description:
      "Comfortable loose-fit Bermuda shorts for casual everyday wear.",
    image: ["/asstes/product/t-shirt-2.jpeg"],
    colors: ["#2563EB", "#111111"],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    stock: 28,
    isActive: true,
  },

  {
    name: "Faded Skinny Jeans",
    category: "Jeans",
    price: 210,
    oldPrice: null,
    discount: null,
    rating: 4.5,
    reviews: 390,
    description:
      "Faded skinny jeans with a modern fit and comfortable feel.",
    image: ["/asstes/product/t-shirt-3.jpeg"],
    colors: ["#1E3A5F"],
    sizes: ["Small", "Medium", "Large", "X-Large"],
    stock: 32,
    isActive: true,
  },
];

const seedProducts = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected");

    await Product.deleteMany({});

    await Product.insertMany(products);

    console.log("Products seeded successfully");

    await mongoose.disconnect();

    process.exit(0);
  } catch (error) {
    console.error("Seed error:", error);

    process.exit(1);
  }
};

seedProducts();