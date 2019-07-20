class CommentsController < ApplicationController
    before_action :set_post 

    def index
        @comments = @post.comments 
       
        render 'comments/index', :layout => false 
         
		
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
        @comment = @post.comments.build(comment_params)
        if @comment.save
            redirect_to post_comments_path
        else
            puts "Not Saving"
            
        end
        # @post = Post.find(params[:post_id])
        # @comment = @post.comments.build(comment_params)
        # puts comment_params 
        # if @comment.save 
        #     render 'comments/show', layout: false 
        # else 
        #     render "posts/show"
		# # if @comment.update(comment_params)
		# # 	respond_to do |format|
		# # 		format.html {redirect_to post_path(@post)}
		# # 		format.json {render json: @comment}
		# # 	end
		# # else
		# # 	flash.now[:message] = @comment.errors[:content][0]
		# # 	render :new
        # # end
        # # redirect_to posts_path 
        # end 
	end
      


    def destroy 
        @post = Post.find(params[:post_id])
        @comment = @post.comments.find(params[:id])
        @comment.destroy
        redirect_to post_path(@post)
    end 

    def new 
        @post = Post.find(params[:post_id])
        @comment = @post.comments.build 
       
    end 

    def edit 
        @post = Post.find(params[:post_id])
        @comment = @post.comments.find(params[:id])
 
    
    end  

    def update 
        @post = Post.find(params[:post_id])
        @comment = @post.comments.find(params[:id])
 
        if @comment.update(comment_params)
            redirect_to posts_path 
        else 
            render :edit 
        end 
    end  

private 

    def comment_params 
        params.require(:comment).permit(:post_id, :content, :user_id)
    end 

    def set_post 
        @post = Post.find(params[:post_id])
    end 
end 