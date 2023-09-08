import express, { Request, Response } from "express";
import { connection } from "./connection/config";
import UserRouter from "./Routes/user.routes";
import ProductRouter from "./Routes/product.routes";
import cartRouter from "./Routes/cart.routes";
import auth from "./Middleware/auth";
import OrderRouter from "./Routes/order.routes";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());
app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Home Route Working ");
});

app.use("/user", UserRouter);
app.use("/product", ProductRouter);
app.use(auth);
app.use("/cart", cartRouter);
app.use("/order", OrderRouter);
app.listen(8080, async () => {
  try {
    await connection;
    console.log("Connected To database");
    console.log("servver is connected to post 8080");
  } catch (error) {
    console.log("Error");
  }
});
