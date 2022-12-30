class Favorite < ApplicationRecord
    belongs_to :user
    belongs_to :candle

    validates :user_id, uniqueness: { scope: :candle_id }
end
