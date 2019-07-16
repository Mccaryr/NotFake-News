Rails.application.routes.draw do 
    root 'welcome#home'
    resources :users, only: [:new,:create,:show]
    resources :posts do 
        resources :comments 
    end 
    get '/signin', to: 'sessions#new'
    post '/signin', to: 'sessions#create'
    post '/logout', to: 'sessions#destroy'
    get '/posts/:id', to: 'posts#show'

end 