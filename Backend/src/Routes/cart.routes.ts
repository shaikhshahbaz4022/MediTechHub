import express, { Request, Response } from "express";
import { Cart, CartModel } from "../models/cart.model";

const cartRouter = express.Router();

cartRouter.post("/create/:id", async (req: any, res: Response) => {
  try {
    const { id } = req.params;
    const userid = req.userID;
    const isCartPresent: Cart | null = await CartModel.findOne({
      userID: userid,
      productID: id,
    });
    if (isCartPresent) {
      return res.status(402).send({ msg: "Product Already in the Cart" });
    }

    let newcartdata: Cart = new CartModel({ userID: userid, productID: id });
    await newcartdata.save();
    return res.json({ msg: "Product Added To Cart" });
  } catch (error: any) {
    res.status(404).send({ msg: error.message });
  }
});
cartRouter.get("/get", async (req: any, res: Response) => {
  try {
    let userid = req.userID;
    let data: Cart[] = await CartModel.find({ userID: userid }).populate(
      "productID"
    );
    return res.json(data);
  } catch (error: any) {
    res.status(404).send({ msg: error.message });
  }
});

cartRouter.delete("/delete/:id", async (req: any, res: Response) => {
  try {
    const cartID = req.params.id;

    const deleteproduct = await CartModel.findByIdAndDelete({
      _id: cartID,
    });
    return res.status(200).send({ msg: "Item Removed From The cart" });
  } catch (error: any) {
    res.status(404).send({ msg: error.message });
  }
});

cartRouter.patch("/inc/:cartID", async (req: any, res: Response) => {
  try {
    const { cartID } = req.params;
    const updateQty = await CartModel.findOneAndUpdate(
      { _id: cartID },
      { $inc: { quantity: 1 } }
    );
    return res.status(201).send({ msg: "Quantity Increased Succesfully" });
  } catch (error: any) {
    res.status(404).send({ msg: error.message });
  }
});

cartRouter.patch("/desc/:cartID", async (req: any, res: Response) => {
  try {
    const { cartID } = req.params;

    const data = await CartModel.findById(cartID);
    if (data?.quantity == 1)
      return res.status(401).send({ msg: "You Cannot Decrement Further" });
    const decre = await CartModel.findOneAndUpdate(
      { _id: cartID },
      { $inc: { quantity: -1 } }
    );
    return res.status(201).send({ msg: "Quantity Decreased Succesfully" });
  } catch (error: any) {
    res.status(404).send({ msg: error.message });
  }
});
export default cartRouter;
