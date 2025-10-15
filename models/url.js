import mongoose from "mongoose";

const urlSchema = mongoose.Schema(
    {
        shortenedId : {
            type : String,
            required : true,
            unique : true
        },
        originalLink : {
            type : String,
            required : true,
        },
        visitHistory : [{timestamp :{
            type : Number
        }}],
        createdBy : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "users",
        }
    }, {timestamps : true},
);

const URL = mongoose.model("url", urlSchema);

export default URL;