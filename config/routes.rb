Rails.application.routes.draw do 
    root 'welcome#home'

    get '/signin', to: 'session#new'
    post '/signin', to: 'session#create'
    post '/logout', to: 'session#destroy'

end 