Rails.application.routes.draw do
  devise_for :users
  root "greetings#greeting"
  get "up" => "rails/health#show", as: :rails_health_check
end
