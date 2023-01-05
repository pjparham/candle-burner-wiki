class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :body, :candle_id
  belongs_to :candle
  belongs_to :user
end