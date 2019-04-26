json.pokemon do
  json.extract! @pokemon, :id, :name, :attack, :defense, :moves, :poke_type, :item_ids
  json.image_url asset_path(@pokemon.image_url)
end 

json.items do  
  @pokemon.items.each do |item|
    json.set! item.id do
      json.merge! item.attributes
    end
  end
end