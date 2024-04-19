import express from "express";
import { allUser, loginUser, signUpUser } from "./user.controller.js";
import { upload } from "../../middleware/fileUpload.middleware.js";
import jwtAuth from "../../middleware/jwt.middleware.js";

const userRouter = express.Router();


userRouter.route('/signup').post(upload.single('profileImageUrl'),signUpUser);
userRouter.route('/login').post(loginUser);
userRouter.route('/alluser').get(jwtAuth,allUser);

export default userRouter;