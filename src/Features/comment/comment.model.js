let commentId = 3;

class Comment {
  constructor(postId, content) {
    this.id = commentId++;
    this.postId = postId;
    this.content = content;
  }
}

let comments = [
  { id: 1, postId: 1, content: "this is the first comment on Post 1." },
  { id: 2, postId: 1, content: "This is the second comment on post 1." },
  { id: 3, postId: 2, content: "This is the first comment on post 2." },
];

// create a comment

const createComment = (postId, content) => {
  const comment = new Comment(postId, content);
  comments.push(comment); // Assuming `comments` is an array containing all comments
  return comment;
};


// get all comments on a specific post

const getCommentsByPostId = (postId) => {
  return comments.filter((comment) => comment.postId === postId);
};



//get comment by its id
const getCommentById = (commentId) => {
  return comments.find((comment) => comment.id === commentId);
};

// function to update a comment

const updateComment = (commentId, content) => {
  const index = comments.findIndex((comment) => comment.id === commentId);
  if (index !== -1) {
    comments[index].content = content;
    return comments[index];
  }
  return null;
};

// Function to delete a comment
const deleteComment = (commentId) => {
  const index = comments.findIndex((comment) => comment.id === commentId);
  if (index !== -1) {
    const deleteComment = comments.splice(index, 1);
    return deleteComment[0];
  }
  return null;
};

export {
  Comment,
  createComment,
  getCommentsByPostId,
  getCommentById,
  updateComment,
  deleteComment,
};
