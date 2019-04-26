import React from 'react';
import PokemonIndexItem from './pokemon_index_item';
// import { fetchPoke } from '../../util/api_util';

class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    debugger
    const id = this.props.match.params.pokemonId;
    this.props.fetchPoke(id);
  }

  render() {
    debugger
    const { poke } = this.props;
    
    if (!poke) return null;
    
    return (
      <>
        <h1> show page for poke id:  </h1>
        <h2>{poke.name}</h2>
      </>
    )
  }
}

export default PokemonDetail;