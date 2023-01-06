class CandlesController < ApplicationController

    before_action :set_candle, only: [:show, :update, :destroy]
    skip_before_action :authorized, only: :index

    def index
        render json: Candle.all, include: ['reviews', 'favorites', 'reviews.user', 'favorites.user']
    end

    def show
        render json: @candle, include: ['reviews', 'favorites', 'reviews.user', 'favorites.user']
    end

    def create
        candle = Candle.create!(candle_params)
        render json: candle
    end

    def update
        @candle.update!(candle_params)
        render json: @candle
    end

    def destroy
        @candle.destroy
        head :no_content
    end

    private

    def candle_params
        params.permit(:name, :producer, :notes, :size, :price, :image_url)
    end

    def set_candle
        @candle = Candle.find(params[:id])
    end
end

