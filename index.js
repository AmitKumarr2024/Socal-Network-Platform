import express from "express";

const port = 3200;

const server = new express();

server.get("/", (req, res) => {
  res.send("Welcome to my page");
});

server.listen(port, () => {
  console.log("Server is successfully run on Port: ", port);
});
