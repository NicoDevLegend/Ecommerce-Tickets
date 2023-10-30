import { model, Schema, models } from "mongoose";

const CartSchema = new Schema({
  userId: String,
  products: Array,
});

export default models.Cart || model("Cart", CartSchema);
