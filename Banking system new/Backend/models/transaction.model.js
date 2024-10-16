import mongoose, {Schema} from "mongoose";

const transactionSchema = new mongoose.Schema({
    userOne:{
        type: String,
        required: true
    },
    userTwo:{
        type: String,
        required: true
    },
    amount:{
        type:Number,
        required:true
    },
    date: {
        type: Date,
    }
});


export const Transaction = mongoose.model("Transaction", transactionSchema);