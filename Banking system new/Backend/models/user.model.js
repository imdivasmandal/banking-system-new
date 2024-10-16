import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        trim: true, 
    },
    email: {
        type: String,
        required: true,
        unique:true,
        trim: true,
    },
    DOB: {
        type: Date,
        required: true,
    },
    phone: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        enum: ["Male", "Female", "Others"],
        required: true
    },
    accountType:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    employment:{
        type:String,
        required:true
    },

});

export const User = mongoose.model("User", userSchema);