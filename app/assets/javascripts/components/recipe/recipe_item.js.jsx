(function(root) {
  root.RecipeItem = React.createClass({
    props: {
      key: React.PropTypes.number,
      recipe: React.PropTypes.object,
      removeRecipe: React.PropTypes.func
    },

    getInitialState: function() {
      return ({ hovered: false });
    },

    toggleHovered: function(e) {
      this.setState({hovered: !this.state.hovered});
    },

    removeRecipe: function(e) {
      RecipeUtil.removeRecipe(e.target.getAttribute("data-id"));
    },

    render: function() {
      var name = "fa fa-times" + (this.state.hovered ? "" : " hidden");

      return (
        <li key={this.props.key} style={{display: 'inline', position: 'relative'}} onMouseLeave={this.toggleHovered} onMouseEnter={this.toggleHovered}>
          {CurrentUserStore.isLoggedIn() ? <i className={name} data-id={this.props.recipe.id} style={{color: 'black', position: 'absolute', right: '0', padding: '2px 4px', cursor: 'pointer'}} onClick={this.props.removeRecipe}></i> : null}
          <a href={this.props.recipe.pdf} target="_blank">
            {this.props.recipe.title}
          </a>
        </li>
      );
    }
  });
})(this);
