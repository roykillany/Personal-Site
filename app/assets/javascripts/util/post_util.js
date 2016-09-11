var PostUtil = window.PostUtil = {

  fetchPosts: function() {
    $.ajax({
      url: '/api/posts',
      type: 'GET',
      dataType: 'json',
      success: function (data) {
        PostActions.receiveAllPosts(data);
      }
    });
  },

  createPost: function(post) {
    $.ajax({
      url: '/api/posts',
      type: 'POST',
      dataType: 'json',
      data: post,
      success: function (data) {
        PostActions.receiveNewPost(data);
      }
    });
  },

};
