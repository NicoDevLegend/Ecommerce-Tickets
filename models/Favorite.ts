import { model, Schema, models } from "mongoose";

const FavoriteSchema = new Schema({
  userId: String,
  productId: String,
});

export default models.Favorite || model("Favorite", FavoriteSchema);
