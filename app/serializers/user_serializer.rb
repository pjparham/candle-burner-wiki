class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :first_name, :last_name, :email, :password_digest
  has_many :favorites
  has_many :reviews
  has_many :favorite_candles, serializer: FavoriteCandlesSerializer


end

