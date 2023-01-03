Rails.application.routes.draw do
  resources :users, only: [:show, :create, :index]
  resources :candles
  resources :favorites, only: [:create]
  resources :reviews, only: [:create]
  patch "/reviews", to: "reviews#update"
  delete "/favorites", to: "favorites#destroy"
  post "/login", to: "sessions#create"
  get "/auth", to: "users#show"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
