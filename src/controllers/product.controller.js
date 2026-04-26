import productModel from "../model/productModel.js";

export const createProduct = async (req, res) => {
  const product = await productModel.create(req.body);
  res.json(product);
};

export const getProducts = async (req, res) => {
  const products = await productModel.find();
  res.json(products);
};

export const getSingleProduct = async (req, res) => {
  const product = await productModel.findById(req.params.id);
  res.json(product);
};
