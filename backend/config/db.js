import mongoose from "mongoose";

export const  connectDB = async () =>{
    await mongoose.connect('mongodb+srv://agamarora456:agamarora456@cluster0.2vg1h7e.mongodb.net/Food-del').then(()=>console.log("DB Connected"))
}

