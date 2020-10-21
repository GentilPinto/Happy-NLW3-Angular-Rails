Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'api/index#index', defaults: {format: :json}
  namespace :api, defaults: {format: :json} do
    namespace :v1, defaults: {format: :json} do
      resources :orphanage, only: [:index, :create, :show, :update, :destroy]
    end
  end
end
