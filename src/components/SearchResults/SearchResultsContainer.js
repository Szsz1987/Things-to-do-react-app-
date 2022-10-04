import {connect} from 'react-redux';
import SearchResults from './SearchResults';
import {getSearchedCardsForColumn} from '../../redux/cardsRedux';

const mapStateToProps = (state, props) => {
  const searchString = props.match.params.searchString;
  return {
    cards: getSearchedCardsForColumn(state, searchString),
  };
};

export default connect(mapStateToProps)(SearchResults);