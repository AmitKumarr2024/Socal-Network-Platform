import { Post, createPost, getAllPosts, getUserPosts, getPostById, updatePost, deletePost } from './post.model.js';

// Create a new post
export function createNewPost(req, res) {
  const { title, content, userId } = req.body;
  const post = createPost(title, content, userId);
  res.status(201).send(post); // Send the entire post object in the response
}


// Retrieve all posts
export function retrieveAllPosts(req, res) {
  const posts = getAllPosts();
  res.status(200).send(posts);
}

// Retrieve user posts
export function retrieveUserPosts(req, res) {
  const userId = req.params.userId;
  const userPosts = getUserPosts(parseInt(userId));
  res.status(200).send(userPosts);
}

// Get post by id
export function retrievePostById(req, res) {
  const postId = req.params.postId;
  const post = getPostById(parseInt(postId));
  if (post) {
    res.status(200).send(post);
  } else {
    res.status(404).send("Post not Found");
  }
}

// Update post
export function updateExistingPost(req, res) {
  const postId = req.params.postId;
  const { title, content } = req.body;
  const updatedPost = updatePost(parseInt(postId), title, content);
  if (updatedPost) {
    res.status(200).send("Post updated successfully", updatedPost);
  } else {
    res.status(400).send("Post not found or update failed.");
  }
}

// Delete post
export function deleteExistingPost(req, res) {
  const postId = req.params.postId;
  const deletedPost = deletePost(parseInt(postId));
  if (deletedPost) {
    res.status(200).send("Post deleted successfully", deletedPost);
  } else {
    res.status(400).send("Post not found");
  }
}
