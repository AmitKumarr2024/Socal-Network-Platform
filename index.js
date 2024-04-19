import express from "express";
import userRouter from "./src/Features/user/user.router.js";
import bodyParser from "body-parser";
import logMiddleware from "./src/middleware/logger.middleware.js";
import cookieParser from "cookie-parser";

const port = 3200;

const server = new express();

// json formate
server.use(cookieParser({extends:true}))
server.use(bodyParser.json());
server.use(logMiddleware);

server.use("/api/user", userRouter);

server.get("/", (req, res) => {
  res.send("Welcome to my page");
});

server.listen(port, () => {
  console.log("Server is successfully run on Port: ", port);
});
