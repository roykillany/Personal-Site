class Link < ActiveModel::Base
	FLAVORS = ["german", "english", "other"]

	validates :url, presence: true

	validates :type, inclusion: { in: TYPES,
	 message: "%{value} is not a valid type" , allow_nil: true, allow_blank: true}
end
