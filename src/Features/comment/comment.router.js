import express from "express";

import { createNewComment, retrieveCommentsByPostId, updateExistingComment, deleteExistingComment } from "./comment.controller.js";

const commentRouter = express.Router();

// Create new comment
commentRouter.post("/posts/:postId/comments", createNewComment);

// Retrieve all comments on a specific post
commentRouter.get("/:postId/comments", retrieveCommentsByPostId);

// Update a comment
commentRouter.put("/:commentId", updateExistingComment);

// Delete a comment
commentRouter.delete("/:commentId", deleteExistingComment);

export default commentRouter;