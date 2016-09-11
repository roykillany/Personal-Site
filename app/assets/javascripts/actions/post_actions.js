var PostActions = {

  receiveAllPosts: function (posts) {
    AppDispatcher.dispatch({
      actionType: PostConstants.RECEIVE_POSTS,
      posts: posts
    });
  },

  receiveNewPost: function (post) {
    AppDispatcher.dispatch({
      actionType: PostConstants.RECEIVE_POST,
      newPost: post
    });
  },
};
