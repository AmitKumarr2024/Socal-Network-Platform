import express from "express";
import { loginUser, signUpUser } from "./user.controller.js";

const userRouter = express.Router();


userRouter.route('/signup').post(signUpUser);
userRouter.route('/login').post(loginUser);

export default userRouter;