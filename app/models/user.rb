class User < ApplicationRecord
    has_secure_password
    has_many :reviews, dependent: :destroy
    has_many :favorites , dependent: :destroy
    has_many :reviewed_candles, :through => :reviews, :source => :candle
    has_many :favorite_candles, :through => :favorites, :source => :candle

    validates :username, presence: true, length: { in: 6..20 }, uniqueness: true
    validates :first_name, presence: true
    validates :last_name, presence: true
    validates :email, presence: true

    def favorite_candles_names
        self.favorite_candles.map { |candle| candle.name }
    end
end
