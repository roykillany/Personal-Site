var RecipeUtil = window.RecipeUtil = {
  fetchRecipes: function() {
    $.ajax({
      url: '/api/recipes',
      type: 'GET',
      dataType: 'json',
      success: function(data) {
        RecipeActions.receiveAllRecipes(data);
      }
    });
  },

  createRecipe: function(recipe) {
    $.ajax({
      url: '/api/recipes',
      type: 'POST',
      dataType: 'json',
      data: recipe,
      success: function (data) {
        RecipeActions.receiveNewRecipe(data);
      }
    });
  },

  removeRecipe: function(id) {
    $.ajax({
      url: '/api/recipes/' + id,
      type: 'DELETE',
      dataType: 'json',
      success: function(data) {
        RecipeActions.removeRecipe(id);
      }
    });
  }
};
