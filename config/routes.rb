Rails.application.routes.draw do 
    root 'welcome#home'
    resources :users, only: [:new,:create,:show]
    resources :posts, only: [:index,:new,:create,:show]
    get '/signin', to: 'sessions#new'
    post '/signin', to: 'sessions#create'
    post '/logout', to: 'sessions#destroy'

end 