import {
  Comment,
  createComment,
  getCommentsByPostId,
  updateComment,
  deleteComment,
} from "./comment.model.js";

// Create a new Comment
export const createNewComment = (req, res) => {
  const { postId, content } = req.body;
  const comment = createComment(postId, content);
  res.status(201).send( comment);
};

// retrieve all comments on a specific post
export const retrieveCommentsByPostId = (req, res) => {
  const postId = req.params.postId;
  const comments = getCommentsByPostId(parseInt(postId));
  res.status(200).send(comments);
};

// update a comment
export const updateExistingComment = (req, res) => {
  const commentId = req.params.commentId;
  const { content } = req.body;
  const updateComment = updateComment(parseInt(commentId), content);
  if (updateComment) {
    res.status(200).send("Comment update successfully", updateComment);
  } else {
    res.status(400).send("Comment Not found or update failed.");
  }
};

export const deleteExistingComment = (req, res) => {
  const commentId = req.params.commentId;
  const deleteComment = deleteComment(parseInt(commentId));
  if (deleteComment) {
    res.status(200).send("comment deleted successfully", deleteComment);
  } else {
    res.status(400).send("Comment not found");
  }
};
