import Product from "../models/product.model.js";

export const createProduct = async (req, res) => {
  const product = await Product.create(req.body);
  res.json(product);
};

export const getProducts = async (req, res) => {
  const products = await Product.find();
  res.json(products);
};

export const getSingleProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.json(product);
};
