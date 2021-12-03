Rails.application.routes.draw do
  post "/users" => "users#create" ##sign up as a user
  post "/sessions" => "sessions#create" ##log in as a user

  get "/recipes" => "recipes#index" ##get all recipes
  get "/recipes/:id" => "recipes#show" ##get single recipe by id
  get "/users" => "users#index" ##get all users
  get "/beers" => "beers#index"  ## get all beers


  patch "/recipes" => "recipes#update" ## update existing recipe
  delete "/recipes" => "recipes#destroy" ## delete a recipe
end
