namespace :carriers do
  desc "Asks each carrier to check for updates"
  task check_for_updates: :environment do
    Rails.configuration.carriers.each do |carrier|
      carrier.shipments.each do |shipment|
        puts "#{shipment.shipment_number} :"
        begin
          carrier.get_delivery_updates(shipment)
          puts "OK"
        rescue Exception => e
          puts "ERRO (#{carrier.display_name})"
          puts e.message
        end
        puts ""
      end
    end
  end
end
