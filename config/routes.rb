Rails.application.routes.draw do
  post "/users" => "users#create" ##sign up as a user
  post "/sessions" => "sessions#create" ##log in as a user
  get "/recipes" => "recipes#index"
  get "/recipes/:id" => "recipes#show"
  post "/recipes" => "recipes#create"
end
