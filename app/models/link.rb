class Link < ActiveRecord::Base
	TYPES = ["sprache", "rezept", "andere"]

	validates :url, presence: true

	validates :link_type, inclusion: { in: TYPES,
	 message: "%{value} is not a valid type" , allow_nil: true, allow_blank: true}
end
