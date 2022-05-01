import { connect } from 'react-redux';
import Column from './Column';
import {getCardsForColumn} from '../../redux/cardsRedux';
import {createActionAddCard} from '../../redux/cardsRedux';

const mapStateToProps = (state, props) => ({
  cards: getCardsForColumn(state, props.id),
});

const mapDispachToProps = (dispach, props) => ({
  addCard: title => dispach(createActionAddCard({
    columnId: props.id,
    title,
  })),
});

export default connect(mapStateToProps, mapDispachToProps)(Column);