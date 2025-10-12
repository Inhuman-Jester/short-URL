import express from "express";
import dotenv from "dotenv";
import path from "path";

dotenv.config({
    path : './.env'
});

import connectDB from './connect.js';
import route from "./routes/url.js";
import staticRoute from "./routes/staticRouter.js"

const app = express();
const PORT = process.env.PORT || 8000;

connectDB(process.env.MONGODB_URI);

app.set('view engine', 'ejs');
app.set('views', path.resolve("./view"));

app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.use("/url", route);
app.use("/", staticRoute);

app.listen(PORT, () => {
    console.log("Server started on Port : " + PORT);
});
