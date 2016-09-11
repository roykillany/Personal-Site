class Api::BirthdaysController < ApplicationController
	def index
		@birthdays = Birthday.all
		render json: ActiveModel::ArraySerializer.new(@birthdays, { each_serializer: Api::BirthdaySerializer })
	end

	def create

		@birthday = Birthday.new({name: params["name"], birthdate: params["birthdate"]})

		begin
			@birthday.save!
			render json: Api::BirthdaySerializer.new(@birthday)
		rescue => e
			p "***birthdays#create***"
			p e.message
			p e.backtrace
			render json: { err: e.message }, status: 422
		end
	end

	def update
		@birthday = Birthday.find(params[:id])
		begin
			@birthday.update(birthday_params)
			@birthday.save!
			render json: Api::BirthdaySerializer.new(@birthday)
		rescue => e
			p "***birthdays#update***"
			p e.message
			p e.backtrace
			render json: { err: e.message }, status: 422
		end
	end

	def destroy
		@birthday = Birthday.find(params[:id])
		begin
			@birthday.destroy!
			render json: { ok: "Birthday deleted" }, status: 204
		rescue => e
			p "***birthdays#destroy***"
			p e.message
			p e.backtrace
			render json: { err: e.message }, status: 422
		end
	end

	private
	def birthday_params
		params.require(:birthday).permit(:name, :birthdate)
	end
end
