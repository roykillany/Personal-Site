class Api::PostsController < ApplicationController
	def index
		@posts = Post.all.order(created_at: :desc)
		render json: ActiveModel::ArraySerializer.new(@posts, { each_serializer: Api::PostSerializer })
	end

	def create
		@post = Post.new(post_params)

		begin
			@post.save!
			render json: Api::PostSerializer.new(@post)
		rescue => e
			p "***posts#create***"
			p e.message
			p e.backtrace
			render json: { err: e.message }, status: 422
		end
	end

	def destroy
		@post = Post.find(params[:id])
		begin
			@post.destroy!
			render json: { ok: "Post deleted" }, status: 204
		rescue => e
			p "***posts#destroy***"
			p e.message
			p e.backtrace
			render json: { err: e.message }, status: 422
		end
	end

	private
	def post_params
		params.require(:post).permit(:name, :comment)
	end
end
