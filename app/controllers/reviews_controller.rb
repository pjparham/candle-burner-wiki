class ReviewsController < ApplicationController
    def create
        user = User.find(session[:user_id])
        review = user.reviews.create(body: params[:body], candle_id: params[:candle_id])
        render json: review
    end

    def update
        user = User.find(session[:user_id])
        review = user.reviews.find_by(candle_id: params[:candle_id])
        review.update(body: params[:body])
        render json: review
    end

    def destroy
        user = User.find(session[:user_id])
        review = user.reviews.find_by(id: params[:id])
        review.destroy
        head :no_content
    end

    private 

    def review_params
        params.permit(:body, :candle_id)
    end
end

