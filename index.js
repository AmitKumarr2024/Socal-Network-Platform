import express from "express";
import userRouter from "./src/Features/user/user.router.js";
import bodyParser from "body-parser";

const port = 3200;

const server = new express();

// json formate

server.use(bodyParser.json());

server.use("/api/user", userRouter);

server.get("/", (req, res) => {
  res.send("Welcome to my page");
});

server.listen(port, () => {
  console.log("Server is successfully run on Port: ", port);
});
