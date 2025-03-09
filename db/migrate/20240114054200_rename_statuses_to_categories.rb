class RenameStatusesToCategories < ActiveRecord::Migration[7.1]
  def change
    rename_table :statuses, :categories
    rename_column :items, :status_id, :category_id
  end
end
