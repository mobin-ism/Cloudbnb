Rails.application.routes.draw do
  get "greetings/greeting"
  get "up" => "rails/health#show", as: :rails_health_check
end
