class Review < ApplicationRecord
    belongs_to :user
    belongs_to :candle

    validates :body, presence: true
end
