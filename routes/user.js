import express from "express";
import {handleSignup, handleLogin} from "../controller/user.js";

const userRoute = express.Router();

userRoute.post("/signup", handleSignup);
userRoute.post("/login", handleLogin);

export default userRoute;