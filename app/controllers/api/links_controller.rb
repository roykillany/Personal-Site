class Api::LinksController < ApplicationController
	def index
		@links = Link.all
		render json: ActiveModel::ArraySerializer.new(@links, { each_serializer: Api::LinkSerializer })
	end

	def create
		
		@link = Link.new({url: params["url"], alias: params["alias"], link_type: params["link_type"]})

		begin
			@link.save!
			render json: Api::LinkSerializer.new(@link)
		rescue => e
			p "***links#create***"
			p e.message
			p e.backtrace
			render json: { err: e.message }, status: 422
		end
	end

	def update
		@link = Link.find(params[:id])
		begin
			@link.update(link_params)
			@link.save!
			render json: Api::LinkSerializer.new(@link)
		rescue => e
			p "***links#update***"
			p e.message
			p e.backtrace
			render json: { err: e.message }, status: 422
		end
	end

	def destroy
		@link = Link.find(params[:id])
		begin
			@link.destroy!
			render json: { ok: "Link deleted" }, status: 204
		rescue => e
			p "***links#destroy***"
			p e.message
			p e.backtrace
			render json: { err: e.message }, status: 422
		end
	end

	private
	def link_params
		params.require(:link).permit(:alias, :url, :link_type)
	end
end
