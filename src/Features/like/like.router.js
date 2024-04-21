import express from 'express';
import { getLikesForPosts, toggleLike } from './like.controller.js';

const likeRouter = express.Router();

// Retrieve likes for a specific post
likeRouter.get('/:postId/likes', getLikesForPosts);

// Toggle like for a specific post
likeRouter.post('/:postId/like', toggleLike);

export default likeRouter;
