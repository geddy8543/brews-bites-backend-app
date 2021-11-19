class Beer < ApplicationRecord
  has_many :pairings
  has_many :recipes, through: :pairings
end
