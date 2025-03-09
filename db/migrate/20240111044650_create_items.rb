class CreateItems < ActiveRecord::Migration[7.1]
  def change
    create_table :items do |t|
      t.string :title
      t.text :content
      t.string :status
      t.string :assignee
      t.integer :position

      t.timestamps
    end
  end
end
