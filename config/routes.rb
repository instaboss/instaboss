Rails.application.routes.draw do

  devise_for :admins
  resources :admin
  # authenticated :user do
  #   root "men#index", as: "authenticated_root"
  # end

  post 'admin/featured_item'

  get 'site/about'
  get 'site/contact'

  devise_for :users

  resources :item
  get 'site/sale_mens'
  get 'site/sale_womens'

  root "site#index"

  get 'women' => 'women#index'
  get 'women/accessorie'
  get 'women/dress'
  get 'women/jean_legging'
  get 'women/lifestyle'
  get 'women/shoe'
  get 'women/short_skirt'
  get 'women/sunglass_watch'
  get 'women/swim_beachwear'
  get 'women/top'

  get 'men' => 'men#index'
  get 'men/formal'
  get 'men/lifestyle'
  get 'men/long'
  get 'men/shoe'
  get 'men/top'
  get 'men/short_swimwear'
  get 'men/sunglass_watch'
  get 'men/accessorie'
end
