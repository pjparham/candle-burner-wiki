class UsersController < ApplicationController
    def create
        user = User.create!(user_params)
        render json: user
    end

    private
    def user_params
        params.permit(:username, :password, :first_name, :last_name, :email)
    end
end

