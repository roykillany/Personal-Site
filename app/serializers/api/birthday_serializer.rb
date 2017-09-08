class Api::BirthdaySerializer < ActiveModel::Serializer
	attributes :id, :name, :birthdate
end
