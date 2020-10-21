json.message "Orfanato cadastrado com sucesso!"
json.id @orphanage.id
json.name @orphanage.name
json.about @orphanage.about
json.latitude @orphanage.latitude.to_f
json.longitude @orphanage.longitude.to_f
json.instructions @orphanage.instructions
json.opening_hours @orphanage.opening_hours
json.open_on_weekends @orphanage.open_on_weekends