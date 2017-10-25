class Api::PostSerializer < ActiveModel::Serializer
	attributes :id, :name, :comment, :created_at

	def created_at
		object.created_at.strftime('%F %T')
	end
end
