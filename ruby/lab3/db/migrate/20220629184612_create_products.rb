class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.string :name
      t.decimal :price
      t.text :description
      t.references :admin, null: false, foreign_key: true

      t.timestamps
    end
  end
end
