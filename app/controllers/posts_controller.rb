class PostsController < ApplicationController
    

    def index 
        @posts = Post.all
        
        respond_to do |f| 
            f.html {render :index}
            f.json {render json: @posts}  
        end 
    end 

    def new 
        @post = Post.new 
    end 

    def create 
        @post = Post.create(post_params)
    end 

    def show
        @post = Post.find(params[:id]) 
        
        respond_to do |f| 
            f.html {render :show}
            f.json {render json: @post}  
        end 
    end 

    def new_comment_form 
        render partial: 'posts/new_comment_form'
    end 

    def post_params 
        params.require(:post).permit(:title, :info, :comment_id, :post_id)
    end 
end 