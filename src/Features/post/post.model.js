let postId = 3;
class Post {
  constructor(title, content, userId) {
    this.id = postId++;
    this.title = title;
    this.content = content;
    this.userId = userId;
  }
}

let posts = [
  new Post("First Post", "This is the content of the first post.", 1),
  new Post("Second Post", "This is the content of the second post.", 2),
  new Post("Third Post", "This is the content of the third post.", 1),
];

// Create post
const createPost = (title, content, userId) => {
  const post = new Post(title, content, userId);
  posts.push(post);
  return post;
};

// Retrieve all posts
const getAllPosts = () => {
  return posts;
};

// Retrieve user posts
const getUserPosts = (userId) => {
  return posts.filter((post) => post.userId === userId);
};

// Get post by id
const getPostById = (postId) => {
  return posts.find((post) => post.id === postId);
};

// Update post
const updatePost = (postId, title, content) => {
  const index = posts.findIndex((post) => post.id === postId);
  if (index !== -1) {
    posts[index].title = title;
    posts[index].content = content;
    return posts[index];
  }
  return null;
};

// Delete post
const deletePost = (postId) => {
  const index = posts.findIndex((post) => post.id === postId);
  if (index !== -1) {
    const deletedPost = posts.splice(index, 1);
    return deletedPost[0];
  }
  return null;
};

export { Post, createPost, getAllPosts, getUserPosts, getPostById, updatePost, deletePost };
