import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import userRoute from "./routes/userRoute.js"

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://mongodbacc10:38312132sS@cluster0.oml4jek.mongodb.net/")
.then(
    res => console.log("database connected")
)
.catch(
    err => console.log("error to connect to datbase")
)
app.listen("3000" , () => {
    console.log("server connected")
})

app.use("/api" , userRoute)