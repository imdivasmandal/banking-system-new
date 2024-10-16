import { ApiResponse } from "../middlewares/ApiResponse.js";
import { asyncHandler } from "../middlewares/asyncHandler.js";
import { ErrorHandler } from "../middlewares/ErrorHandler.js";
import { Transaction } from "../models/transaction.model.js"


const transactions =  asyncHandler(async (req,res) => {
    try {
      const data = await Transaction.find();
      res.status(200).json(
        new ApiResponse(201, data)
      );
    } catch (e) {
      console.log(e);
      throw new ErrorHandler(400, e.message || "Transaction unable to fetch");
    }
});

const createTrans = asyncHandler(async(req, res) => {
    const{userOne, userTwo, amount } = req.body;

    const Trans = await Transaction.create({
      userOne, userTwo, amount
    });
    console.log(Trans);
    return res.status(200).json(
      new ApiResponse(200,"Transaction created sucessfully")
  );
})

export {
    transactions,
    createTrans,
}