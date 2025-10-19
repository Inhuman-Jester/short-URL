import dotenv from "dotenv";
dotenv.config();

import jwt from "jsonwebtoken";
const secret = process.env.JWT_SECRET;

const setUser = (user)=>{
    return jwt.sign({
        id: user._id,
        username : user.username,
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