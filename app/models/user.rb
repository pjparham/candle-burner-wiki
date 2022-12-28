class User < ApplicationRecord
    has_secure_password
    has_many :reviews
    has_many :favorites 
    has_many :reviewed_candles, :through => :reviews, :source => :candle
    has_many :favorite_candles, :through => :favorites, :source => :candle
end
