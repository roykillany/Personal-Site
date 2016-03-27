class CreateLinks < ActiveRecord::Migration
  def change
    create_table :links do |t|
    	t.string :alias
    	t.string :url, null: false
    	t.string :comment

    	t.timestamps
    end
  end
end
