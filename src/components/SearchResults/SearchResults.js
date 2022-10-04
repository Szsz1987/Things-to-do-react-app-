import React from 'react';
import styles from './SearchResults.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import Icon from '../Icon/Icon';
import {settings} from '../../data/dataStore';
import Container from '../Container/Container';

const SearchResult = ({title, cards, icon}) => (
  <section className={styles.component}>
    <Container>
      <h3 className={styles.title}>{title}
        <span className={styles.icon}>
          <Icon name={icon}/>
        </span>
      </h3>
      <div className={styles.cards}> 
        {cards.map(cardData => (
          <Card key={cardData.id} {...cardData}/>
        ))}
      </div>
    </Container>
  </section>
);

SearchResult.defaultProps = {
  icon: settings.defaultComlumnIcon,
  title: 'Search Results',
};

SearchResult.propTypes = {
  title: PropTypes.string,
  cards: PropTypes.array,
  icon: PropTypes.string,
};

export default SearchResult;