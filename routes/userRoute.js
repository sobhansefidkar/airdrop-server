import express from "express";
import { getUser, register } from "../controller/userController.js";

const router = express.Router()

router.get("/getUser" , getUser)

router.post("/register"  , register)

export default router