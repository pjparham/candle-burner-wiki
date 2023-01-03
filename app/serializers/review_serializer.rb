class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :body
  belongs_to :candle
  belongs_to :user
end
