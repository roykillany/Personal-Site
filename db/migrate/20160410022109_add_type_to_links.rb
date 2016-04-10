class AddTypeToLinks < ActiveRecord::Migration
  def change
    add_column :links, :type, :string
  end
end
