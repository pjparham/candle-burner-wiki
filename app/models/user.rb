class User < ApplicationRecord
    has_secure_password
    has_many :reviews
    has_many :favorites 
    has_many :reviewed_candles, :through => :reviews, :source => :candle
    has_many :favorite_candles, :through => :favorites, :source => :candle

    validates :username, presence: true, length: { in: 6..20 }
    validates :first_name, presence: true
    validates :last_name, presence: true
    validates :email, presence: true
end
