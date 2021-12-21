class RemoveColumnFromRecipesAgain < ActiveRecord::Migration[6.1]
  def change
    remove_column :recipes, :section_id, :integer
  end
end
