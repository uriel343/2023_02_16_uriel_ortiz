import express from "express";
import dotenv from "dotenv";
import router from "./src/routes/router.js";
import cors from "cors";

dotenv.config();
const app = new express();

app.use(express.json())
app.use(cors())
app.use("/", router);
app.listen(process.env.PORT, () => {
  console.log("Hello world from express", process.env.PORT);
});
