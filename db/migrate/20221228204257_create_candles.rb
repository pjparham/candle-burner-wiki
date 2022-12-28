class CreateCandles < ActiveRecord::Migration[6.1]
  def change
    create_table :candles do |t|
      t.string :name
      t.string :producer
      t.string :notes
      t.string :size
      t.string :price
      t.string :image_url

      t.timestamps
    end
  end
end
