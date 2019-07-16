class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :info, :created_at 
  has_many :comments 
end
