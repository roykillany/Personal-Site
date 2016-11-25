class Api::BirthdaySerializer < ActiveModel::Serializer
	attributes :id, :first_name, :last_name, :birthdate
end
