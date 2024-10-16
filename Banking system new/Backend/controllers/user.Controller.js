import { ApiResponse } from "../middlewares/ApiResponse.js";
import { asyncHandler } from "../middlewares/asyncHandler.js";
import { ErrorHandler } from "../middlewares/ErrorHandler.js";
import { User }  from "../models/user.model.js"
import { Transaction } from "../models/transaction.model.js";
import mongoose from "mongoose";

const createUser = asyncHandler(async(req, res) => {
    const {firstName, lastName, DOB, email, phone, gender, accountType, amount, employment} = req.body;
    if([firstName, lastName, DOB, email, phone, gender, accountType, amount, employment].some((data) => data?.trim() === ""))
    {
        throw new ErrorHandler(400, "Please fill full form");
    }
    const existUser = await User.findOne({email});
    if(existUser){
        throw new ErrorHandler(409, "User with this email already exist");
    }

    const user = await User.create({
        firstName, lastName, DOB, email, phone, gender, accountType, amount, employment
    });
    console.log(user);
    return res.status(200).json(
        new ApiResponse(200, user, "User created sucessfully")
    );
});

const getUsers = asyncHandler( async(req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({
            success: true,
            users,
        });
    } catch (error) {
        res.status(500).json(
            new ErrorHandler(400, error.message)
        )
    }
});

const getMe = asyncHandler( async(req, res) => {   
    try{
        const data = await User.findById(req.params.id);
        if (data) {
        res.send(data);
        }
    } catch (error){
        throw new ErrorHandler(400, "User not found");
    }
});

const transferMoney = asyncHandler( async(req, res) => {
    try {
        let {id, count, email} = req.body;
        count = Number(count);
        let data = await User.findById(id);
        let data2 = await User.findOne({email});
        data.amount = data.amount - count;
        data2.amount = data2.amount + count;
        await data.save();
        await data2.save();
   
        const newTrans = new Transaction({
            userOne: data.firstName,
            userTwo: data2.firstName,
            amount: count,
            date: Date.now(),
        })
        await newTrans.save()
        res.send("Money transfered sucessfully");
    } catch (error) {
        console.log(error)
        throw new ErrorHandler(400, "Money Transfered Failed");
    }
});


export {
    transferMoney,
    getMe,
    getUsers,
    createUser,
}