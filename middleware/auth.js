import { getUser } from "../service/auth.js";

const allowLoggedinUserOnly = async (req, res, next) =>{
    const userUid = req.cookies.uid;
    if(!userUid)    return res.redirect("/user/login");
    
    const user =  getUser(userUid);
    if(!user)    return res.redirect("/user/login");

    req.user = user;
    next();
}

export default allowLoggedinUserOnly;