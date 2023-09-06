import express, { Request, Response } from "express";
import { Product, ProductModel } from "../models/products.model";
const ProductRouter = express.Router();

ProductRouter.post("/create", async (req: Request, res: Response) => {
  try {
    const { name, description, price, category, image }: Product = req.body;

    const newdataAdded: Product = new ProductModel({
      name,
      description,
      price,
      category,
      image,
    });
    await newdataAdded.save();
    res.status(201).send({ msg: "Product Added Succesfully" });
  } catch (error: any) {
    res.status(404).send({ msg: error.message });
  }
});

ProductRouter.get("/", async (req: Request, res: Response) => {
  try {
    const data: Product[] = await ProductModel.find();
    return res.status(200).send(data);
  } catch (error: any) {
    res.status(404).send({ msg: error.message });
  }
});

ProductRouter.get("/byid/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data: Product | null = await ProductModel.findById({ _id: id });
    return res.status(200).send(data);
  } catch (error: any) {
    res.status(404).send({ msg: error.message });
  }
});
export default ProductRouter;
