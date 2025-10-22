import { getUser } from "../service/auth.js"; 

const allowLoggedinUserOnly = async (req, res, next) =>{
    const userUid = req.cookies.uid;
    req.user = null;
    
    if(!userUid)    return next();
    
    const user =  getUser(userUid);
    req.user = user;

    return next();
}

const authorizeByRole = (roles = []) => {
    return (req, res, next) =>{
        const role = req.user?.role;

        if(!roles.includes(role))   return res.end("UNAUTHORIZED");

        next();
    }
}

export  {allowLoggedinUserOnly, authorizeByRole};