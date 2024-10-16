import express from "express"
import { createTrans, transactions } from "../controllers/transaction.Controller.js";
const router = express.Router();


router.get("/transactions", transactions);


export default router;