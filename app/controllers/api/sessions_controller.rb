class Api::SessionsController < ApplicationController

  def show
    unless current_user
      render json: {}
      return
    end

    @user = current_user
    render json: @user
  end

  def create

    @user = User.find_by_credentials(
      params[:email],
      params[:password]
    )

    if @user.nil?
      render json: {errors: ["Wrong!"]}, status: 401
    else
      log_in(@user)
      render json: @user
    end
  end

  def destroy
    log_out
    render json: {}
  end


end
