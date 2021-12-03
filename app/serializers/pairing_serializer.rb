class PairingSerializer < ActiveModel::Serializer
  attributes :id, :recipe_id, :beer_id

  belongs_to :beer
  belongs_to :recipe
end
