class Api::RecipesController < ApplicationController
  def index
    @recipes = Recipe.all
    render json: ActiveModel::ArraySerializer.new(@recipes, { each_serializer: Api::RecipeSerializer })
  end

  def create
    @recipe = Recipe.new(recipe_params)

    if @recipe.save
      render json: Api::RecipeSerializer.new(@recipe)
    else
      render json: { err: recipe.errors.full_messages }, status: 422
    end
  end

  def destroy
    @recipe = Recipe.find(params[:id])

    if @recipe.destroy
      head 204
    else
      render json: { err: @recipe.errors.full_messages }, status: 422
    end
  end

  private
  def recipe_params
    params.require(:recipe).permit(:title, :details, :pdf)
  end
end
