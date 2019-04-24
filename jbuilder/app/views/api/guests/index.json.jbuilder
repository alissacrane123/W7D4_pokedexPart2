debugger
json.guests do 
  @guests.each do |guest|
    json.partial! 'guest', guest: guest 
  end
end

# json.array! @guests, :name, :age, :favorite_color