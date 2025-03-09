Rails.application.routes.draw do
  root 'tops#index'

  resources :items, only: [:index, :create, :update, :destroy] do
    post :update_all_position, on: :collection
  end

  resources :categories, only: [:index, :create, :destroy] do
    delete :destroy_all_items, on: :member
  end
  resources :users, only: %i[new create]

  get 'login', to: 'user_sessions#new'
  post 'login', to: 'user_sessions#create'
  delete 'logout', to: 'user_sessions#destroy'
end
