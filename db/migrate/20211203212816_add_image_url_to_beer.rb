class AddImageUrlToBeer < ActiveRecord::Migration[6.1]
  def change
    add_column :beers, :image_url, :string
  end
end
