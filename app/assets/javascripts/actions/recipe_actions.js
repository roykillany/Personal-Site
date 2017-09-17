var RecipeActions = {
  receiveAllRecipes: function (recipes) {
    AppDispatcher.dispatch({
      actionType: RecipeConstants.RECEIVE_RECIPES,
      recipes: recipes
    });
  },

  receiveNewRecipe: function (recipe) {
    AppDispatcher.dispatch({
      actionType: RecipeConstants.RECEIVE_RECIPE,
      newRecipe: recipe
    });
  },

  removeRecipe: function (id) {
    AppDispatcher.dispatch({
      actionType: RecipeConstants.REMOVE_RECIPE,
      recipeId: id
    });
  }
};
