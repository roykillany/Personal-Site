class Api::LinkSerializer < ActiveModel::Serializer
	attributes :id, :alias, :url, :comment, :link_type
end
