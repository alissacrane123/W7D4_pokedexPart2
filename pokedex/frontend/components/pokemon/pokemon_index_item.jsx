import React from 'react';
import { Link } from 'react-router-dom';


const PokemonIndexItem = ({poke}) => {
   return (
     <Link to={ `/pokemon/${poke.id}` }>
        <li key={poke.id}> {poke.name} <img src={poke.image_url} height={25} width={25} /></li>
     </Link>
)};


export default PokemonIndexItem;