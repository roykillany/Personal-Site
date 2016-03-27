class Api::PhotoSerializer < ActiveModel::Serializer
	attributes :id, :details, :image
end