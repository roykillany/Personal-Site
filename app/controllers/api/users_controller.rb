class Api::UsersController < ApplicationController
	def index
		@users = User.all
		render json: ActiveModel::ArraySerializer.new(@users, { each_serializer: Api::UserSerializer })
	end

	def create
		@user = User.new(user_params)
		begin
			@user.save!
			render json: Api::UserSerializer.new(@user)
		rescue => e
			p "***users#create***"
			p e.message
			p e.backtrace
			render json: { err: e.message }, status: 422
		end
	end

	private
	def user_params
		params.require(:user).permit(:username, :password)
	end
end