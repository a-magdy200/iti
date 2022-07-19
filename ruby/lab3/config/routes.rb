Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  root "products#index"
   resources :products do
    resources :admins do 
    end
  end
end
