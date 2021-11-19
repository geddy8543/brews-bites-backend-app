class Recipe < ApplicationRecord
  has_many :pairings
  has_many :beers, through: :pairings
end
