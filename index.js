import express from "express";
import swagger from "swagger-ui-express";
import apiDocs from './swagger.json' assert{type:"json"};
import userRouter from "./src/Features/user/user.router.js";
import postRouter from './src/Features/post/post.router.js';
import bodyParser from "body-parser";
import logMiddleware from "./src/middleware/logger.middleware.js";
import cookieParser from "cookie-parser";
import { errorHandlerMiddleware } from "./src/errorHandler/errorHandler.js";
import jwtAuth from "./src/middleware/jwt.middleware.js";

const port = 3200;

const server = new express();


server.use("/api-docs",swagger.serve,swagger.setup(apiDocs));

// json formate
server.use(cookieParser({extends:true}))
server.use(bodyParser.json());
server.use(logMiddleware);

server.use("/api/user", userRouter);
server.use("/api/posts",jwtAuth,postRouter)

server.get("/", (req, res) => {
  res.send("Welcome to my page");
});

server.use(errorHandlerMiddleware);

server.listen(port, () => {
  console.log("Server is successfully run on Port: ", port);
});
