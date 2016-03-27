class Link < ActiveModel::Base
	validates :url, presence: true
end