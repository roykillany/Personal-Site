(function(root) {
  root.Recipes = React.createClass({
    getInitialState: function() {
      return {
        recipes: RecipeStore.recipes()
      };
    },

    componentDidMount: function() {
      RecipeStore.addChangeHandler(this._onRecipeChange);
      RecipeUtil.fetchRecipes();
    },

    componentWillUnmount: function() {
      RecipeStore.removeChangeHandler(this._onRecipeChange);
      if(this.dropzone) this.dropzone.disable();
    },

    _onRecipeChange: function() {
      this.setState({
        recipes: RecipeStore.recipes()
      });
    },

    mountDropZone: function(el) {
      this.dropzone = new Dropzone(".dropzone", {
        url: "api/recipes",
        paramName: "recipe[pdf]",
        addRemoveLinks: true,
      });

      this.dropzone.on("success", function(file, resp) {
        RecipeActions.receiveNewRecipe(resp);
      }.bind(this));

      this.dropzone.on("removedfile", function(file) {
        RecipeUtil.removeRecipe(JSON.parse(file.xhr.response).recipe.id);
      });
    },

    removeRecipe: function(e) {
      RecipeUtil.removeRecipe(e.target.getAttribute("data-id"));
    },

    render: function() {
      var _this = this;

  		return (
  			<div>
          Recipes
          {CurrentUserStore.isLoggedIn() ? <div id="recipe_dropzone">
            <form action="/api/recipes" className="dropzone" id="my-awesome-dropzone" ref={this.mountDropZone}></form>
          </div> : null}
          <div>
            <ul>
              {this.state.recipes.map(function(el, idx) {
                return (
                  <RecipeItem
                    key={idx}
                    recipe={el}
                    removeRecipe={_this.removeRecipe}
                  />
                );
              })}
            </ul>
          </div>
  			</div>
  		);
  	}
  });
})(this);
