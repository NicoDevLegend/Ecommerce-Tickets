import { model, Schema, models } from "mongoose";

const PurchaseSchema = new Schema({
  userId: String,
  products: Array,
  prices: Array,
  totalPrice: Number,
  date: String,
});

export default models.Purchase || model("Purchase", PurchaseSchema);
