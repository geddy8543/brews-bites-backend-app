Rails.application.routes.draw do
  post "/users" => "users#create" ##sign up as a user
  post "/sessions" => "sessions#create" ##log in as a user
  post "/recipes" => "recipes#create"
  post "/beers" => "beers#create"

  get "/recipes" => "recipes#index" ##get all recipes
  get "/recipes/:id" => "recipes#show" ##get single recipe by id
  get "/users" => "users#index" ##get all users
  get "/beers" => "beers#index"  ## get all beers
  get "/beers/:id" => "beers#show"


  patch "/recipes" => "recipes#update" ## update existing recipe
  delete "/recipes/:id" => "recipes#destroy" ## delete a recipe
  delete "/beers/:id" => "beers#destroy" ## delete a beer
end
