import dotenv from "dotenv";
dotenv.config();

import jwt from "jsonwebtoken";
const secret = process.env.JWT_SECRET;

const setUser = (user)=>{
    console.log("Generating token for user:", user);
    return jwt.sign({
        id: user._id,
        username : user.username,
        role : user.role,
    }, secret);
};

const getUser = (token)=>{
    if(!token)  return null;
    try {
        return jwt.verify(token, secret);
    } catch (error) {
        return null;
    }
};

export {setUser, getUser};