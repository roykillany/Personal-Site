class CreateRecipes < ActiveRecord::Migration
  def change
    create_table :recipes do |t|
      t.attachment :pdf
      t.string :details
      t.string :title

      t.timestamps
    end
  end
end
