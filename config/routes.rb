Tlab::Application.routes.draw do
root :to => 'home#index'

 resources :restaurants, :only => [:index, :create, :update]

end
