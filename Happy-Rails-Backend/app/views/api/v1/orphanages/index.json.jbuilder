json.orphanages(@orphanages) do |orphanage|
    json.id orphanage.id
    json.name orphanage.name
    json.about orphanage.about
    json.latitude orphanage.latitude.to_f
    json.longitude orphanage.longitude.to_f
    json.instructions orphanage.instructions
    json.opening_hours orphanage.opening_hours
    json.open_on_weekends orphanage.open_on_weekends
    json.images orphanage.images
end