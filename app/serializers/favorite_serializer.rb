class FavoriteSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :candle_id
  belongs_to :user
  belongs_to :candle
end
