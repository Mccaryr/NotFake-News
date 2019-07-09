class CommentsController < ApplicationRecord 

    def new 
        @comment = Comment.new 
    end 

    def destroy 
        @comment = Comment.find(params[:id])
        @comment.destroy
        redirect_to posts_path
    end 