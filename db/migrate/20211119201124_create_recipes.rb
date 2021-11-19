class CreateRecipes < ActiveRecord::Migration[6.1]
  def change
    create_table :recipes do |t|
      t.integer :section_id
      t.string :title
      t.text :description
      t.text :ingredients
      t.text :instructions
      t.string :image_url

      t.timestamps
    end
  end
end
