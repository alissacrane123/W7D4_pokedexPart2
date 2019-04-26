import { connect } from 'react-redux';
import { fetchPoke } from '../../actions/pokemon_actions';
import PokemonDetail from './pokemon_detail';

const mapStateToProps = (state, ownProps) => {
  debugger
  return {
    poke: state.entities.pokemon[ownProps.match.params.pokemonId]
  }
}

const mapDispatchToProps = dispatch => ({
  fetchPoke: (id) => dispatch(fetchPoke(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail); 