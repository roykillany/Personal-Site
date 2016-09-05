class Api::PostSerializer < ActiveModel::Serializer
	attributes :id, :full_name, :email, :comment

	def full_name
		"#{object.name}"
	end
end
