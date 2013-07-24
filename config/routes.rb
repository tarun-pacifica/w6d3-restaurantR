Tlab::Application.routes.draw do
root :to => 'home#index'

 resources :restaurants, :only => [:index, :create, :update]
 resources :users, :only => [:index, :new, :create]

  get '/login' => 'session#new'
  post '/login' => 'session#create'
  delete '/login' => 'session#destroy'

end
