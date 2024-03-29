Rails.application.routes.draw do
  root 'shipments#index'

  get  'settings',                                   to: "settings#index"
  post 'settings/update_api_key',                    to: "settings#update_api_key"
  get  'accounts/:id/:carrier_class/edit',           to: "accounts#edit_carrier"
  post 'accounts/:id/update_carrier_settings',       to: "accounts#update_carrier_settings"

  get  'track/:shipment_number',                     to: "tracking#show"

  # CORREIOS ROUTES - DELETE ONCE SETTINGS ARE NOT SPECIFIC # REFACTOR
  post "/correios/:shipment_id/get_plp",                        to: "correios#get_plp"
  post "/correios/:account_id/:shipping_method/send_plp",       to: "correios#send_plp"
  post "/correios/:account_id/:shipping_method/",               to: "correios#save_new_range"

  devise_for :users
  resources :users
  resources :accounts
  resources :packages
  resources :companies
  resources :carriers do
    collection do
      get  'sync_ready_shipments',  to: "carriers#sync_ready_shipments"
    end
    member do
      post "validate_credentials_ajax"
    end
  end

  resources :shipments do
    collection do
      get  '/',                     to: "shipments#index"
      post 'new_from_xml',          to: "shipments#new_from_xml"
      get  'update_all_shipments_delivery_status', to: "shipments#update_all_shipments_delivery_status"
    end
    member do
      get  'save_tracking_number',  to: "shipments#save_tracking_number"
      get  'get_labels',            to: "shipments#get_labels", format: :pdf
      post 'send_to_carrier',       to: "shipments#send_to_carrier"
      post 'set_as_shipped',        to: "shipments#set_as_shipped"
      post 'save_delivery_updates', to: "shipments#save_delivery_updates"
    end
  end

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :shipments do
        member do
          get  'save_tracking_number', to: "shipments#save_tracking_number"
          get  'get_labels',           to: "shipments#get_labels", format: :pdf
          post 'send_to_carrier',      to: "shipments#send_to_carrier"
          post 'update_invoice_xml',   to: "shipments#update_invoice_xml"
          post 'set_as_shipped',       to: "shipments#set_as_shipped"
        end
      end
      resources :shipping_methods
    end
  end

end
