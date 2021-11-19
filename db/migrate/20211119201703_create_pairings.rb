class CreatePairings < ActiveRecord::Migration[6.1]
  def change
    create_table :pairings do |t|
      t.integer :recipe_id
      t.integer :beer_id

      t.timestamps
    end
  end
end
