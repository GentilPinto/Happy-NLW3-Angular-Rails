require "factory_bot_rails"

FactoryBot.define do
    factory :orphanage do
        name { "Lar Kuzola" }
        about { "Lar de caridade" }
        latitude { -8.9179403 }
        longitude { 13.200951799999999 }
        instructions { "vem de carro" }
        opening_hours { "18h as 20h" }
        open_on_weekends { true }
        images {
            [
                fixture_file_upload('files/file1.jpg', 'image/jpg'),
                fixture_file_upload('files/file2.jpg', 'image/jpg')
            ]
        }
    end
end