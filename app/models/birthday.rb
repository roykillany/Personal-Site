class Birthday < ActiveRecord::Base
	validates :name, :birthdate, presence: true
end
