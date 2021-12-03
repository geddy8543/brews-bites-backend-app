class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :section_id, :title, :description, :ingredients, :instructions, :image_url

  has_many :pairings
  has_many :beers, through: :pairings
end
