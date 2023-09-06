"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const products_model_1 = require("../models/products.model");
const ProductRouter = express_1.default.Router();
ProductRouter.post("/create", async (req, res) => {
    try {
        const { name, description, price, category, image } = req.body;
        const newdataAdded = new products_model_1.ProductModel({
            name,
            description,
            price,
            category,
            image,
        });
        await newdataAdded.save();
        res.status(201).send({ msg: "Product Added Succesfully" });
    }
    catch (error) {
        res.status(404).send({ msg: error.message });
    }
});
ProductRouter.get("/", async (req, res) => {
    try {
        const data = await products_model_1.ProductModel.find();
        return res.status(200).send(data);
    }
    catch (error) {
        res.status(404).send({ msg: error.message });
    }
});
ProductRouter.get("/byid/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const data = await products_model_1.ProductModel.findById({ _id: id });
        return res.status(200).send(data);
    }
    catch (error) {
        res.status(404).send({ msg: error.message });
    }
});
exports.default = ProductRouter;
