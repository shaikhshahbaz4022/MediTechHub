import mongoose, { Document, Schema } from "mongoose";

export interface Product extends Document {
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
}
const productSchema: Schema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
});

export let ProductModel = mongoose.model<Product>("product", productSchema);
