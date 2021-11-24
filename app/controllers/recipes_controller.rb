class RecipesController < ApplicationController
  def index
    recipes = Recipe.all
    render json: recipes
  end

  def show
    recipe = Recipe.find_by(id: params[:id])
    render json: recipe
  end

  def create
    recipe = Recipe.new(
      section_id: params["section_id"],
      title: params["title"],
      description: params["description"],
      ingredients: params["ingredients"],
      instructions: params["instructions"],
      image_url: params["image_url"],
    )
    ### happy path
    if recipe.save
      render json: recipe
      ### sad path
    else
      render json: { errors: recipe.errors.full_messages },
             status: 422
    end
  end

  def update
    recipe_id = params["id"]
    recipe = Recipe.find_by(id: recipe)

    recipe.title = params["title"] || recipe.title
    recipe.description = params["description"] || recipe.description
    recipe.ingredients = params["ingredients"] || recipe.ingredients
    recipe.instructions = params["instructions"] || recipe.instructions

    if recipe.save
      render json: recipe
    else
      render json: { errors: recipe.errors.full_message },
             status: 422
    end
  end

  def destroy
    recipe_id = params["id"]
    recipe = Recipe.find_by(id: recipe_id)

    recipe.destroy
    render json: { message: "Recipe succeessfully destroyed!" }
  end
end
