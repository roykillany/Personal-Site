(function(root) {
  root.GuestbookItem = React.createClass({
    props: {
      key: React.PropTypes.number,
      post: React.PropTypes.object
    },

    getInitialState: function() {
      return ({ hovered: false });
    },

    toggleHovered: function(e) {
      this.setState({hovered: !this.state.hovered});
    },

    removePost: function(e) {
      PostUtil.removePost(e.target.getAttribute("data-id"));
    },

    render: function() {
      var name = "fa fa-times" + (this.state.hovered ? "" : " hidden");

      return (
        <li key={this.props.key} style={{width: '100px', position: 'relative'}} onMouseLeave={this.toggleHovered} onMouseEnter={this.toggleHovered}>
          {CurrentUserStore.isLoggedIn() ? <i className={name} data-id={this.props.post.id} style={{color: 'black', position: 'absolute', right: '0', padding: '2px 4px', cursor: 'pointer'}} onClick={this.removePost}></i> : null}
          <div>{this.props.post.name}</div>
          <div>{this.props.post.email}</div>
          <div>{this.props.post.comment}</div>
        </li>
      );
    }
  });
})(this);
