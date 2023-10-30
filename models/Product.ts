import { model, Schema, models } from "mongoose";

const ProductSchema = new Schema({
  name: String,
  href: String,
  searchParam: String,
  category: String,
  description: String,
  date: String,
  amount: Number,
  price: Number,
  offer: Number,
  rating: Number,
  reviewCount: Number,
  imageSrc: String,
  imageAlt: String,
});

export default models.Product || model("Product", ProductSchema);
