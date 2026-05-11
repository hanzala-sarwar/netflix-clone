
import express from "express";
import dotenv from "dotenv";
import databaseConnection from "../utils/database.js";
import cookieParser from "cookie-parser";
import userRoute from "../routes/userRoute.js";
import cors from "cors";


dotenv.config();

//  database
databaseConnection();


const app = express();
app.get('/', (req, res) => {
    res.send('Hello World')
})


//middlewares 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
const corsOptions = {
    origin: [
        "http://localhost:3000",
        "https://your-frontend.vercel.app"
    ],
    credentials: true
}
app.use(cors(corsOptions));

// api
app.use("/api/v1/user", userRoute);


export default app;
