class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content 
  belongs_to :post 
  belongs_to :user 
end
