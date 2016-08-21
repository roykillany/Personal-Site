class Post < ActiveRecord::Base
	validates :first_name, :last_name, :email, :comment, presence: true
end
