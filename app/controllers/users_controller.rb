class UsersController < ApplicationController 
    # before_action :current_user, only: [:show]
    # before_action :require_login, only: [:show]
    
    
    def new 
        @user = User.new
    end 

    def create
        @user = User.new(user_params)
        if @user.save 
            session[:user_id] = @user.id 
            redirect_to root_path 
        else 
            render new_user_path 
        end 
    end 

    def show 
        @user = User.find_by_id(params[:id])
    end     

    private 

    def user_params
        params.require(:user).permit(:username, :password, :comment_id)
    end 
end 