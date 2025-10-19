import user from "../models/user.js";
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
    const token = setUser(userFromDb);
    res.cookie("uid", token);
    return res.redirect("/");
}

export { handleSignup, handleLogin };