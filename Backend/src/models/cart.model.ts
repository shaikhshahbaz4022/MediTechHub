import mongoose, { Document, Schema } from "mongoose";

export interface Cart extends Document {
  userID: mongoose.Schema.Types.ObjectId;
  productID: mongoose.Schema.Types.ObjectId;
  quantity: number;
}
const cartSchema: Schema = new Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  productID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "product",
  },
  quantity: { type: Number, default: 1 },
});

export const CartModel = mongoose.model<Cart>("cart", cartSchema);
