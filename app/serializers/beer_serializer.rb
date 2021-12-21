class BeerSerializer < ActiveModel::Serializer
  attributes :id, :name, :style, :description, :image_url

  has_many :pairings
  has_many :recipes, through: :pairings

end
