class CandleSerializer < ActiveModel::Serializer
  attributes :id, :image_url, :name, :notes, :price, :producer, :size
  has_many :reviews
  has_many :favorites
end
