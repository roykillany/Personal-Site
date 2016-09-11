Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index, :create, :destroy]
    resources :posts, only: [:index, :create, :destroy]
    resources :links, only: [:index, :create, :update, :destroy]
    resources :birthdays, only: [:index, :create, :update, :destroy]
    resources :photos, only: [:show, :index, :create, :update, :destroy]
    resource :session, only: [:create, :destroy, :show]
  end
end
