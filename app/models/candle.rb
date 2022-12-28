class Candle < ApplicationRecord
    has_many :reviews
    has_many :favorites 
    has_many :reviewed_users, :through => :reviews, :source => :user 
    has_many :favorite_users, :through => :favorites, :source => :user 
end
