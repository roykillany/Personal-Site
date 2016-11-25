class Api::BirthdaySerializer < ActiveModel::Serializer
	attributes :id, :firstname, :lastname, :birthdate
end
