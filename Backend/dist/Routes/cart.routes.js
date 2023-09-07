"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cart_model_1 = require("../models/cart.model");
const cartRouter = express_1.default.Router();
cartRouter.post("/create/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const userid = req.userID;
        const isCartPresent = await cart_model_1.CartModel.findOne({
            userID: userid,
            productID: id,
        });
        if (isCartPresent) {
            return res.status(402).send({ msg: "Product Already in the Cart" });
        }
        let newcartdata = new cart_model_1.CartModel({ userID: userid, productID: id });
        await newcartdata.save();
        return res.json({ msg: "Product Added To Cart" });
    }
    catch (error) {
        res.status(404).send({ msg: error.message });
    }
});
cartRouter.get("/get", async (req, res) => {
    try {
        let userid = req.userID;
        let data = await cart_model_1.CartModel.find({ userID: userid }).populate("productID");
        return res.json(data);
    }
    catch (error) {
        res.status(404).send({ msg: error.message });
    }
});
cartRouter.delete("/delete/:id", async (req, res) => {
    try {
        const cartID = req.params.id;
        const deleteproduct = await cart_model_1.CartModel.findByIdAndDelete({
            _id: cartID,
        });
        return res.status(200).send({ msg: "Item Removed From The cart" });
    }
    catch (error) {
        res.status(404).send({ msg: error.message });
    }
});
cartRouter.patch("/inc/:cartID", async (req, res) => {
    try {
        const { cartID } = req.params;
        const updateQty = await cart_model_1.CartModel.findOneAndUpdate({ _id: cartID }, { $inc: { quantity: 1 } });
        return res.status(201).send({ msg: "Quantity Increased Succesfully" });
    }
    catch (error) {
        res.status(404).send({ msg: error.message });
    }
});
cartRouter.patch("/desc/:cartID", async (req, res) => {
    try {
        const { cartID } = req.params;
        const data = await cart_model_1.CartModel.findById(cartID);
        if (data?.quantity == 1)
            return res.status(401).send({ msg: "You Cannot Decrement Further" });
        const decre = await cart_model_1.CartModel.findOneAndUpdate({ _id: cartID }, { $inc: { quantity: -1 } });
        return res.status(201).send({ msg: "Quantity Decreased Succesfully" });
    }
    catch (error) {
        res.status(404).send({ msg: error.message });
    }
});
exports.default = cartRouter;
