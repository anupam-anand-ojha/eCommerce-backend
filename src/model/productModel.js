import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  image: String,
  category: String,
  stock: Number
});

const productModel = mongoose.model("product", productSchema);

export default productModel
