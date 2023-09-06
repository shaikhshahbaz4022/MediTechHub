"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = require("./connection/config");
const user_routes_1 = __importDefault(require("./Routes/user.routes"));
const product_routes_1 = __importDefault(require("./Routes/product.routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("Home Route Working ");
});
app.use("/user", user_routes_1.default);
app.use("/product", product_routes_1.default);
app.listen(8080, async () => {
    try {
        await config_1.connection;
        console.log("Connected To database");
        console.log("servver is connected to post 8080");
    }
    catch (error) {
        console.log("Error");
    }
});
