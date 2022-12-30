class Candle < ApplicationRecord
    has_many :reviews, dependent: :destroy
    has_many :favorites, dependent: :destroy
    has_many :reviewed_users, :through => :reviews, :source => :user 
    has_many :favorite_users, :through => :favorites, :source => :user 

    validates :name, presence: true
    validates :producer, presence: true
    validates :notes, presence: true
    validates :size, presence: true
    validates :price, presence: true
    validates :image_url, presence: true

end
