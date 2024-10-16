import express from "express"
import dotenv from "dotenv"
import connectDB from "./db/index.js"
import cookieParser from "cookie-parser";
import cors from "cors"
import userRoute from "./router/userRouter.js"
import messageRoute from "./router/messageRouter.js"
const app = express()
dotenv.config({
    path: './.env'
})

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v2/user",userRoute);
app.use("/api/v2/message",messageRoute);

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`⚙️ Server is listening at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})