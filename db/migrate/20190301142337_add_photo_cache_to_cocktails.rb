class AddPhotoCacheToCocktails < ActiveRecord::Migration[5.2]
  def change
    add_column :cocktails, :photo_cache, :string
  end
end
