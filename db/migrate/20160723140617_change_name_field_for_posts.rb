class ChangeNameFieldForPosts < ActiveRecord::Migration
  def change
    remove_column :posts, :first_name, :string
    remove_column :posts, :last_name, :string
    add_column :posts, :name, :string
  end
end
