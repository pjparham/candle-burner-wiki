class Review < ApplicationRecord
    belongs_to :user
    belongs_to :candle

    validates :summary, presence: true
    validates :body, presence: true
end
