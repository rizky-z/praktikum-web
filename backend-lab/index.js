import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import ProductRoute from "./routes/ProductRoute.js";
import CategoriRoute from "./routes/CategoriRoute.js";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(ProductRoute);
app.use(CategoriRoute);

app.listen(process.env.APP_PORT, ()=>{
    console.log('Server up and running...');
});