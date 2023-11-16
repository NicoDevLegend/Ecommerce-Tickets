import { model, Schema, models } from "mongoose";

const ProductSchema = new Schema({
  name: String,
  quantity: Number,
  seats: Array,
  searchParam: String,
  category: String,
  description: String,
  date: String,
  price: Number,
  offer: Number,
  rating: Number,
  reviewCount: Number,
  imageSrc: String,
  imageAlt: String,
});

export default models.Product || model("Product", ProductSchema);
