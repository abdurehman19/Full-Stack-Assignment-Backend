import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    oldPrice: {
      type: Number,
      default: null,
    },

    discount: {
      type: String,
      default: "",
    },

    rating: {
      type: Number,
      default: 0,
    },

    reviews: {
      type: Number,
      default: 0,
    },

    description: {
      type: String,
      default: "",
    },

    image: {
      type: [String],
      default: [],
    },

    colors: {
      type: [String],
      default: [],
    },

    sizes: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;