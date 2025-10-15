import express from 'express';

const router = express.Router();

router.get("/", (req, res)=>{
    return res.render("home");
})

router.get("/user/signup", (req, res)=>{
    return res.render("signup");
})

router.get("/user/login", (req, res)=>{
    return res.render("login");
})

export default router;