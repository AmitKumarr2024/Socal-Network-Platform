import { Like, addLike, removeLike, getLikesForPost } from './like.model.js';

// Retrieve likes for a specific post
export function getLikesForPosts(req, res) {
  const postId = parseInt(req.params.postId);
  const likes = getLikesForPost(postId);
  res.status(200).json(likes);
}

// Toggle like for a specific post
export function toggleLike(req, res) {
  const postId = parseInt(req.params.postId);
  const userId = parseInt(req.body.userId);

  const existingLikeIndex = Like.findIndex(like => like.postId === postId && like.userId === userId);

  if (existingLikeIndex === -1) {
    // If like doesn't exist, add a new like
    const newLike = addLike(postId, userId);
    res.status(201).json(newLike);
  } else {
    // If like exists, remove the existing like
    const removedLike = removeLike(postId, userId);
    res.status(200).json(removedLike);
  }
}
