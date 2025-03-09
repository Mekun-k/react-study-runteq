class ModifyItemsForStatuses < ActiveRecord::Migration[7.1]
  def change
    remove_column :items, :status, :string

    create_table :statuses do |t|
      t.string :name
      t.references :user, null: false, foreign_key: true
      t.timestamps
    end

    add_reference :items, :status, null: false, foreign_key: true
  end
end
