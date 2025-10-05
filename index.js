import express from "express";
import dotenv from "dotenv";

dotenv.config({
    path : './.env'
});

import connectDB from './connect.js';
import router from "./routes/url.js";

const app = express();
const PORT = process.env.PORT || 8000;

connectDB(process.env.MONGODB_URI);

app.use(express.urlencoded({extended : false}));

app.use("/", router);

app.listen(PORT, () => {
    console.log("Server started on Port : " + PORT);
});
