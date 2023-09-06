import express, { Request, Response } from "express";
import { connection } from "./connection/config";
import UserRouter from "./Routes/user.routes";
const app = express();
app.use(express.json());
app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Home Route Working ");
});

app.use("/user", UserRouter);
app.listen(8080, async () => {
  try {
    await connection;
    console.log("Connected To database");
    console.log("servver is connected to post 8080");
  } catch (error) {
    console.log("Error");
  }
});
