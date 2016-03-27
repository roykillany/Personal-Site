class Api::PostSerializer < ActiveModel::Serializer
	attributes :id, :full_name, :email, :comment

	def full_name
		"#{object.first_name} #{object.last_name}"
	end
end