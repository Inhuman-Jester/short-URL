import user from "../models/user.js";
import { v4 as uuidv4 } from 'uuid';
import { setUser, getUser } from "../service/auth.js";

const handleSignup = async (req, res) =>{
    const { username, email, password } = req.body;
    await user.create({
        username,
        email, 
        password,
    })

    return res.redirect("/user/login");
}

const handleLogin = async (req, res) => {
    const { username, password} = req.body;
    const userFromDb = await user.findOne({ username, password });
    if(!userFromDb)   return res.render("login", {
        error : "Invalid Username or Password"
    });

    const uid = uuidv4(); ;
    setUser(uid, userFromDb);
    res.cookie("uid", uid);
    return res.redirect("/");
}

export { handleSignup, handleLogin };