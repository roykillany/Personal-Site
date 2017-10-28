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
      this.converter = new showdown.Converter();

      return (
        <li className='grid-item guestbook-item' key={this.props.key} onMouseLeave={this.toggleHovered} onMouseEnter={this.toggleHovered}>
          {CurrentUserStore.isLoggedIn() ? <i className={name} data-id={this.props.post.id} style={{color: 'black', position: 'absolute', right: '0', padding: '2px 4px', cursor: 'pointer'}} onClick={this.removePost}></i> : null}
          <div className='item-header'>
            <div className='name'>{this.props.post.name}</div>
            <div className='timestamp'>{this.props.post.created_at}</div>
          </div>
          <div className='item-body' dangerouslySetInnerHTML={{ __html: this.converter.makeHtml(this.props.post.comment)}} />
        </li>
      );
    }
  });
})(this);
