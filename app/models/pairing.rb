class Pairing < ApplicationRecord
  belongs_to :recipe
  belongs_to :beer
end
