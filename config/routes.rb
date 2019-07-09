Rails.application.routes.draw do 
    root 'welcome#home'
    resources :users, only: [:new, :create, :show]

    get '/signin', to: 'session#new'
    post '/signin', to: 'session#create'
    post '/logout', to: 'session#destroy'

end 