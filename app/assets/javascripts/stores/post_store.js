(function (root) {
  var CHANGE_EVENT = "change";

  var _posts = [];

  root.PostStore = $.extend({}, EventEmitter.prototype, {

    addChangeHandler: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeHandler: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    posts: function () {
      return _posts.slice(0);
    },

    changed: function () {
      this.emit(CHANGE_EVENT);
    },

    addNewPost: function (newPost) {
      _posts.push(newPost);
    },

    dispatcherId: AppDispatcher.register(function (payload) {
      switch (payload.actionType) {

        case PostConstants.RECEIVE_POSTS:
          _posts = payload.posts;
          PostStore.changed();
          break;
        case PostConstants.RECEIVE_POST:
          PostStore.addNewPost(payload.newPost.post);
          PostStore.changed();
        break;

      }
    })

  });
})(this);
