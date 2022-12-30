class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :summary, :body
  belongs_to :candle
  belongs_to :user
end
