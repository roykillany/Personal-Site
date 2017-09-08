class CreateBirthdays < ActiveRecord::Migration
  def change
    create_table :birthdays do |t|
        t.string :name, null: false
        t.date :birthdate, null: false
        t.timestamps
    end
    add_index :birthdays, :name, unique: true
  end
end
