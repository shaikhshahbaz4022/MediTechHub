import mongoose, { Document, Schema } from "mongoose";

export interface Order extends Document {
  userID: mongoose.Schema.Types.ObjectId;
  order_items: mongoose.Schema.Types.ObjectId[];
  order_date: Date;
  total_amount: number;
  order_status: string;
  shipping_address: string;
}

const orderSchema: Schema = new Schema({
  userID: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
  order_items: [{ type: mongoose.Schema.Types.ObjectId, ref: "cart" }],
  order_date: { type: Date, default: Date.now, required: true },
  total_amount: { type: Number, required: true },
  order_status: {
    type: String,
    enum: ["recieved", "pending", "shipped", "delivered"],
    default: "pending",
    required: true,
  },
  shipping_address: { type: String, required: true },
});

export const OrderModel = mongoose.model<Order>("order", orderSchema);
