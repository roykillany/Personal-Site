(function(root) {
  root.Guestbook = React.createClass({
    getInitialState: function() {
      return ({
        posts: PostStore.posts(),
      });
    },

    componentDidMount: function () {
      PostStore.addChangeHandler(this._onPostChange);
      PostUtil.fetchPosts();
    },

    componentDidUpdate: function() {
      this.masonry && this.masonry.destroy();

      this.masonry = new Masonry('.grid', {
        itemSelector: '.grid-item',
        gutter: 20,
        columnWidth: 376,
        horizontalOrder: true,
        fitWidth: true
      });
    },

    componentWillUnmount: function () {
      PostStore.removeChangeHandler(this._onPostChange);
      this.masonry.destroy();
    },

    _onPostChange: function () {
      this.setState({
        posts: PostStore.posts()
      });
    },

    render: function() {
  		return (
  			<Row className="main-container">
          <Column size="12">
            <Row>
              <Column size="6">
                <h4>Guestbook</h4>
                <GuestbookForm />
              </Column>
            </Row>
            <Row>
              <Column size="12">
                <ul id="post_container" className="grid">
                  {this.state.posts.map(function(p, idx) {
                    return (
                      <GuestbookItem
                        key={idx}
                        post={p}
                      />
                    );
                  })}
                </ul>
              </Column>
            </Row>
          </Column>
  			</Row>
  		);
  	}
  });
})(this);
