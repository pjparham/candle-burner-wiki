class RemoveSummaryFromReviews < ActiveRecord::Migration[6.1]
  def change
    remove_column :reviews, :summary
  end
end
