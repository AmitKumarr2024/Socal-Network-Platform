import express from "express";
import { createNewPost, deleteExistingPost, retrieveAllPosts, retrievePostById, retrieveUserPosts, updateExistingPost } from "./post.controller.js";

const postRouter = express.Router();

// Create new post
postRouter.post("/posts", createNewPost);

// Retrieve all posts
postRouter.get("/posts",retrieveAllPosts );

// Retrieve user posts
postRouter.get('/users/:userId/posts', retrieveUserPosts);

// Get a post by its id
postRouter.get('/posts/:postId', retrievePostById);

// Update a post
postRouter.put('/posts/:postId', updateExistingPost);

// Delete a post
postRouter.delete('/posts/:postId', deleteExistingPost);

export default postRouter;
