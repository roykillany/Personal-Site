class SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(user_params[:username], user_params[:password])
    
    if @user
      log_in(@user)
      render json: Api::UserSerializer.new(@user)
    else
      if User.exists?({username: user_params[:username]})
        render json: { err: { pw: "That password is incorrect" } }, status: 422
      else  
        render json: { err: { name: "That username doesn't exist" } }, status: 422
      end
    end
  end

  def destroy
    current_user.reset_session_token!
    session[:token] = nil
    render json: { ok: "1" }
  end

  private
  def user_params
    params.require(:user).permit(:username, :password)
  end
end