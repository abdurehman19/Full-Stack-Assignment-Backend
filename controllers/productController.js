import mongoose from "mongoose";
import Product from "../models/Product.js";


// =====================================================
// GET ALL PRODUCTS
// GET /api/products
// =====================================================

export const getProducts = async (req, res) => {
  try {
    const {
      page = 1,
      limit = 20,
      search = "",
      category = "",
    } = req.query;

    const pageNumber = Math.max(Number(page), 1);
    const limitNumber = Math.min(
      Math.max(Number(limit), 1),
      100
    );

    const skip = (pageNumber - 1) * limitNumber;

    const filter = {
      isActive: true,
    };


    // Search
    if (search.trim()) {
      filter.$or = [
        {
          name: {
            $regex: search.trim(),
            $options: "i",
          },
        },
        {
          category: {
            $regex: search.trim(),
            $options: "i",
          },
        },
      ];
    }


    // Category
    if (category.trim()) {
      filter.category = {
        $regex: category.trim(),
        $options: "i",
      };
    }


    const [products, total] =
      await Promise.all([
        Product.find(filter)
          .sort({ createdAt: -1 })
          .skip(skip)
          .limit(limitNumber),

        Product.countDocuments(filter),
      ]);


    res.status(200).json({
      success: true,

      products,

      pagination: {
        total,
        page: pageNumber,
        limit: limitNumber,
        pages: Math.ceil(
          total / limitNumber
        ),
      },
    });

  } catch (error) {
  console.error("Get Products Error:", error);

  res.status(500).json({
    success: false,
    message: "Failed to fetch products",
    error: error.message,
  });
}
};



// =====================================================
// GET SINGLE PRODUCT
// GET /api/products/:id
// =====================================================

export const getProductById = async (
  req,
  res
) => {
  try {

    const { id } = req.params;


    if (
      !mongoose.Types.ObjectId.isValid(id)
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid product ID",
      });
    }


    const product =
      await Product.findOne({
        _id: id,
        isActive: true,
      });


    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }


    res.status(200).json({
      success: true,
      product,
    });

  } catch (error) {

    console.error(
      "Get Product Error:",
      error.message
    );

    res.status(500).json({
      success: false,
      message: "Failed to fetch product",
    });
  }
};



// =====================================================
// CREATE PRODUCT
// POST /api/products
// =====================================================

export const createProduct = async (
  req,
  res
) => {
  try {

    const product =
      await Product.create(req.body);


    res.status(201).json({
      success: true,
      message: "Product created successfully",
      product,
    });

  } catch (error) {

    console.error(
      "Create Product Error:",
      error.message
    );


    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};



// =====================================================
// UPDATE PRODUCT
// PUT /api/products/:id
// =====================================================

export const updateProduct = async (
  req,
  res
) => {
  try {

    const { id } = req.params;


    if (
      !mongoose.Types.ObjectId.isValid(id)
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid product ID",
      });
    }


    const product =
      await Product.findByIdAndUpdate(
        id,
        req.body,
        {
          new: true,
          runValidators: true,
        }
      );


    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }


    res.status(200).json({
      success: true,
      message: "Product updated successfully",
      product,
    });

  } catch (error) {

    console.error(
      "Update Product Error:",
      error.message
    );


    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};



// =====================================================
// DELETE PRODUCT
// DELETE /api/products/:id
// =====================================================

export const deleteProduct = async (
  req,
  res
) => {
  try {

    const { id } = req.params;


    if (
      !mongoose.Types.ObjectId.isValid(id)
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid product ID",
      });
    }


    const product =
      await Product.findByIdAndUpdate(
        id,
        {
          isActive: false,
        },
        {
          new: true,
        }
      );


    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }


    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
    });

  } catch (error) {

    console.error(
      "Delete Product Error:",
      error.message
    );


    res.status(500).json({
      success: false,
      message: "Failed to delete product",
    });
  }
};