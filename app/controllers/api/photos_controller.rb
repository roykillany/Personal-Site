class Api::PhotosController < ApplicationController
	def show
		begin
			@photo = Photo.find(params[:id])
			render json: Api::PhotoSerializer.new(@photo)
		rescue => e
			p "***photos#show***"
			p e.message
			p e.backtrace
			render json: { err: e.message }, status: 404
		end
	end

	def index
		@photos = Photo.all.order(created_at: :desc)
		render json: ActiveModel::ArraySerializer.new(@photos, { each_serializer: Api::PhotoSerializer })
	end

	def create
		@photo = Photo.new(photo_params)

		begin
			@photo.save!
			render json: Api::PhotoSerializer.new(@photo)
		rescue => e
			p "***photos#create***"
			p e.message
			p e.backtrace
			render json: { err: e.message }, status: 422
		end
	end

	def update
		@photo = Photo.find(params[:id])
		begin
			@photo.update(photo_params)
			@photo.save!
			render json: Api::PhotoSerializer.new(@photo)
		rescue => e
			p "***photos#update***"
			p e.message
			p e.backtrace
			render json: { err: e.message }, status: 422
		end
	end

	def destroy
		@photo = Photo.find(params[:id])
		begin
			@photo.destroy!
			render json: { id: @photo.id }, status: 200
		rescue => e
			p "***photos#destroy***"
			p e.message
			p e.backtrace
			render json: { err: e.message }, status: 422
		end
	end

	private
	def photo_params
		params.require(:photo).permit(:details, :image)
	end
end
