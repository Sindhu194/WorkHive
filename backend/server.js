import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.route.js";
import postRoutes from "./routes/post.route.js";
import notificationRoutes from "./routes/notification.route.js";
import connectionRoutes from "./routes/connection.route.js";
import {connectDB} from "./lib/db.js";
import path from "path";
dotenv.config();

const app=express();
const PORT=process.env.PORT ||5000;
const __dirmane=path.resolve();
if(process.env.NODE_ENV !=="production"){
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true,
}));
}
app.use(cookieParser());
app.use(express.json({limit:"5mb"}));

app.use("/api/v1/auth",authRoutes);
app.use("/api/v1/users",userRoutes);
app.use("/api/v1/posts",postRoutes);
app.use("/api/v1/notifications",notificationRoutes);
app.use("/api/v1/connections",connectionRoutes);

if(process.env.NODE_ENV==="production"){
    app.use(express.static(path.join(__dirmane,"/frontend/dist")));
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirmane,"frontend","dist","index.html"));
});
}



app.listen(PORT,() =>{
    console.log(`Server is running on port ${PORT}`);
    connectDB();
});


