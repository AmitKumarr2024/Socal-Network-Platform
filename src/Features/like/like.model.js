class Like {
    constructor(postId, userId, timestamp) {
      this.postId = postId;
      this.userId = userId;
      this.timestamp = timestamp;
    }
  }
  
  let likes = [
    new Like(1, 101, '2024-04-13T08:30:00.000Z'),
    new Like(1, 102, '2024-04-13T09:15:00.000Z'),
    new Like(2, 103, '2024-04-13T10:00:00.000Z'),
    new Like(3, 101, '2024-04-13T11:45:00.000Z'),
    new Like(2, 104, '2024-04-13T12:30:00.000Z')
  ];
  
  // Add a like
  const addLike = (postId, userId) => {
    const timestamp = new Date().toISOString();
    const like = new Like(postId, userId, timestamp);
    likes.push(like);
    return like;
  };
  
  // Remove a like
  const removeLike = (postId, userId) => {
    const index = likes.findIndex(like => like.postId === postId && like.userId === userId);
    if (index !== -1) {
      const removedLike = likes.splice(index, 1);
      return removedLike[0];
    }
    return null; // Like not found
  };
  
  // Get all likes on a specific post
  const getLikesForPost = (postId) => {
    return likes.filter(like => like.postId === postId);
  };
  
  export { Like, addLike, removeLike, getLikesForPost };
  