(function(root) {
  var CHANGE_EVENT = "change",
      _recipes     = [];

  root.RecipeStore = $.extend({},EventEmitter.prototype, {
    addChangeHandler: function(callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeHandler: function(callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    recipes: function() {
      return _recipes.slice(0);
    },

    changed: function() {
      this.emit(CHANGE_EVENT);
    },

    addNewRecipe: function(newRecipe) {
      _recipes.push(newRecipe);
    },

    removeRecipe: function(id) {
      var idx;

      for(var i = 0; i < _recipes.length; i++) {
        if(_recipes[i].id === id) {
          idx = i;
        }
      }

      _recipes.splice(idx, 1);
    },

    dispatcherId: AppDispatcher.register(function(payload) {
      switch (payload.actionType) {
        case RecipeConstants.RECEIVE_RECIPES:
          _recipes = payload.recipes;
          RecipeStore.changed();
          break;
        case RecipeConstants.RECEIVE_RECIPE:
          RecipeStore.addNewRecipe(payload.newRecipe.recipe);
          RecipeStore.changed();
          break;
        case RecipeConstants.REMOVE_RECIPE:
          RecipeStore.removeRecipe(payload.recipeId);
          RecipeStore.changed();
          break;
        default:
        break;
      }
    })
  });
})(this);
