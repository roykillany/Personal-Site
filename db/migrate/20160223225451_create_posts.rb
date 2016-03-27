class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
    	t.string :first_name, null: false
    	t.string :last_name, null: false
    	t.string :email, null: false
    	t.string :comment, null: false

    	t.timestamps
    end

    add_index :posts, :first_name
    add_index :posts, :last_name
    add_index :posts, :email
    add_index :posts, [:first_name, :last_name]
  end
end
