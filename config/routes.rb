Rails.application.routes.draw do 
    root 'welcome#home'
    resources :users, only: [:new,:create,:show]
    resources :posts do 
        resources :comments 
    end 

    # get '/new_comment_form', to: 'posts#new_comment_form'
    get '/signin', to: 'sessions#new'
    post '/signin', to: 'sessions#create'
    post '/logout', to: 'sessions#destroy'

    patch 'posts/:id/comments/:id', to: 'comments#edit'
    

end 