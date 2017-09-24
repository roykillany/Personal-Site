(function(root) {
  root.Guestbook = React.createClass({
    getInitialState: function() {
      return ({ posts: PostStore.posts() });
    },

    componentDidMount: function () {
      PostStore.addChangeHandler(this._onPostChange);
      PostUtil.fetchPosts();
    },

    componentWillUnmount: function () {
      PostStore.removeChangeHandler(this._onPostChange);
    },

    _onPostChange: function () {
      this.setState({
        posts: PostStore.posts()
      });
    },

    render: function() {
  		return (
  			<div>
          <div>Guestbook</div>
          <GuestbookForm />
          <ul id="post_container">
            {this.state.posts.map(function(p, idx) {
              return (
                <GuestbookItem
                  key={idx}
                  post={p}
                />
              );
            })}
          </ul>
  			</div>
  		);
  	}
  });
})(this);
