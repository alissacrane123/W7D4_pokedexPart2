json.extract! @pokemon, :id, :name, :attack, :defense, :moves, :poke_type, :image_url, :item_ids
@pokemon.items.each do |item|
  json.set! item.id do
    json.extract! item
    # json.image_url asset_path(item.image_url)
  end
end