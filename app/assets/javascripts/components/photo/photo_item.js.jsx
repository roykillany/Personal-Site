(function(root) {
  root.PhotoItem = React.createClass({
    props: {
      key: React.PropTypes.number,
      photo: React.PropTypes.object,
      removePhoto: React.PropTypes.func
    },

    getInitialState: function() {
      return ({ hovered: false });
    },

    toggleHovered: function(e) {
      this.setState({hovered: !this.state.hovered});
    },

    render: function() {
      var name = "fa fa-times" + (this.state.hovered ? "" : " hidden");

      return (
        <li key={this.props.key} style={{width: '100px', position: 'relative'}} onMouseLeave={this.toggleHovered} onMouseEnter={this.toggleHovered}>
          {CurrentUserStore.isLoggedIn() ? <i className={name} data-id={this.props.photo.id} style={{color: 'white', position: 'absolute', right: '0', padding: '2px 4px', cursor: 'pointer'}} onClick={this.props.removePhoto}></i> : null}
          <img src={this.props.photo.image} style={{width: '100px'}}/>
        </li>
      );
    }
  });
})(this);
