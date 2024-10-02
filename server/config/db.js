import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://jaingeetansh:geetansh@cluster0.ezxnf.mongodb.net/food-del').then(()=>{console.log("DB connected")})
}