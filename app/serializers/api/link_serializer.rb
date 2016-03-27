class Api::LinkSerializer < ActiveModel::Serializer
	attributes :id, :alias, :url, :comment
end