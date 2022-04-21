import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import Icon from '../Icon/Icon';

class Column extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    cards: PropTypes.array,
    icon:  PropTypes.string,
  }
  render() {
    const {title, cards, icon} = this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title}> {title}
          <span className={styles.icon}>
            <Icon name={icon}/>
          </span>
        </h3>
        <div className={styles.cards}>
          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData}/>
          ))}
        </div>
        {/*
          <div className={styles.creator}>
            <Creator text={settings.cardCreatorText} action={title => this.addCard(titke)}/>
          </div>        
        */}
      </section>
    );
  }
}

export default Column;