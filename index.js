import express from "express";
import dotenv from "dotenv";
import path from "path";
import cookieParser from "cookie-parser";

dotenv.config({
    path : './.env'
});

import connectDB from './connect.js';
import route from "./routes/url.js";
import staticRoute from "./routes/staticRouter.js";
import userRoute from "./routes/user.js";
import allowLoggedinUserOnly from "./middleware/auth.js";

const app = express();
const PORT = process.env.PORT || 8000;

connectDB(process.env.MONGODB_URI);

app.set('view engine', 'ejs');
app.set('views', path.resolve("./view"));

app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(cookieParser());

app.use("/url", allowLoggedinUserOnly, route);
app.use("/", staticRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
    console.log("Server started on Port : " + PORT);
});
