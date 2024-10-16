import express from "express"
import { createUser, getMe, getUsers, transferMoney} from "../controllers/user.Controller.js";
const router = express.Router();



router.get("/allusers", getUsers);
router.post("/add", createUser);
router.get("/:id", getMe);
router.post("/transmoney", transferMoney);


export default router;