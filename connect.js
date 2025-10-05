import mongoose from "mongoose";

const connectDB = async (URL)=>{
//Connect db
    mongoose
        .connect(URL)
        .then(() => console.log("DB Connected"))
        .catch((err) => console.log("Mongo Err", err));
}

export default connectDB;