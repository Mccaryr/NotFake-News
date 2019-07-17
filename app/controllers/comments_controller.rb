class CommentsController < ApplicationController
    before_action :set_post 

    def index
        # @comments = @post.comments 
        # render 'comments/index', :layout => false 
         
		if params[:post_id]
			@post = Post.find(params[:post_id])
			@comments = Comment.all.where(post_id: params[:post_id])

			respond_to do |format|
				format.html {render partial: 'comments/post_comments', locals: { comments: @comments, post: @post}}
                format.json {render json: @comments}
            end
        
		else
			@comments = Comment.all
			respond_to do |f|
				f.html {render :index} 
				f.json {render json: @comments}
			end
		end
    end
    
    def show
		@comment = Comment.find(params[:id])
		respond_to do |f|
			f.html {render :show} 
			f.json {render json: @comment}
		end
	end

    def create
        @post = Post.find(params[:post_id])
            @comment = @post.comments.create(comment_params)
            redirect_to post_path(@post)
    end  


    def destroy 
        @post = Post.find(params[:post_id])
        @comment = @post.comments.find(params[:id])
        @comment.destroy
        redirect_to post_path(@post)
    end 

private 

    def comment_params 
        params.require(:comment).permit(:content, :post_id)
    end 

    def set_post 
        @post = Post.find(params[:post_id])
    end 
end 