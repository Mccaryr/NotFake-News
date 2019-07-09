class PostsController < ApplicationRecord 

    def index 
        @posts = Post.all  
    end 

    def show
        @post = Post.find(post_params) 
    end 