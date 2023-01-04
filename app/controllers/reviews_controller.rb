class ReviewsController < ApplicationController
    def create
        user = User.find(session[:user_id])
        review = Review.create(body: params[:body], user_id: user.id, candle_id: params[:candle_id])
        render json: review
    end

    def update
        user = User.find(session[:user_id])
        review = user.reviews.find_by(candle_id: params[:candle_id])
        review.update(body: params[:body])
        render json: review
    end

    def destroy
        review = Review.find(params[:id])
        review.destroy
        head :no_content
    end

    private 

    def review_params
        params.permit(:body, :candle_id)
    end
end

