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
          {this.state.posts.map(function(p) {
            return (
              <div>
                <div>{p.name}</div>
                <div>{p.email}</div>
                <div>{p.comment}</div>
              </div>
            );
          })}
  			</div>
  		);
  	}
  });
})(this);
