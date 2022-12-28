class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.string :summary
      t.text :body
      t.integer :candle_id
      t.integer :user_id

      t.timestamps
    end
  end
end
