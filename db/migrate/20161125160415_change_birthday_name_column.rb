class ChangeBirthdayNameColumn < ActiveRecord::Migration
  def change
    remove_column :birthdays, :name, :string
    add_column :birthdays, :last_name, :string
    add_column :birthdays, :first_name, :string
  end
end
