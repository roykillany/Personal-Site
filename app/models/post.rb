class Post < ActiveRecord::Base
	validates :name, :comment, presence: true
end
