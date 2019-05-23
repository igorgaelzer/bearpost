Rails.application.routes.draw do
  root 'home#index'

  get  'settings',                                   to: "settings#index"
  get  'accounts/:id/:carrier_id/edit',              to: "accounts#edit_carrier"
  post 'accounts/:id/update_carrier_settings',       to: "accounts#update_carrier_settings"

  resources :carriers
  resources :accounts
  resources :packages
  resources :shipments
end
