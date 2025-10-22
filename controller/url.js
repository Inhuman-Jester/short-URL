import URL from "../models/url.js";
import {nanoid} from "nanoid";


const handleCreateNewId = async (req, res) => {
    if(!req.user)   return res.redirect("/user/login")
    const body = req.body;
    if(!body)   {
        res.status(400).json( { error : "URL is required" } );
    }

    const id = nanoid(8);

    const result = await URL.create({
        shortenedId : id,
        originalLink : body.originalLink,
        visitHistory : [],
        createdBy : req.user._id,
    });

    return res.render( "home", { id : id } );
}

const handleGetUrl = async (req, res) =>{
    const id = req.params.id;

    const url = await URL.findOneAndUpdate({ shortenedId: id }, {
        $push : {
            visitHistory : {
                timestamp : Date.now()
            }
        }
    });

    return res.redirect( url.originalLink );
}

const handleGetAnalytics = async(req, res) => {
    if(!req.user)   return res.redirect('/user/login');
    const allUrl = await URL.find({ createdBy : req.user._id });
    return res.render("analytics", {allUrl : allUrl});
}

const handleGetAnalyticsOfId = async (req, res) =>{
    if(!req.user)   return res.redirect('/user/login');
    const id = req.params.id;
    
    const url = await URL.findOne({shortenedId: id});

    return res.json({
        totalClicks: url.visitHistory.length,
        analytics : url.visitHistory
    });
}

export {handleGetAnalytics, handleCreateNewId, handleGetUrl, handleGetAnalyticsOfId};