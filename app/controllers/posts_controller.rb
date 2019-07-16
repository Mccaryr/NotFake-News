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
        if @post.save 
            respond_to do |f| 
                f.html {redirect_to posts_path}
                f.json {redner json: @posts}
            end 
        else 
            redirect_to posts_path 
        end 
    end 

    def show
        @post = Post.find(params[:id]) 
        # respond_to do |f| 
        #     f.html {render :index}
        #     f.json {render json: @post}  
        # end 
    end 

    def post_params 
        params.require(:post).permit(:title, :info)
    end 
end 