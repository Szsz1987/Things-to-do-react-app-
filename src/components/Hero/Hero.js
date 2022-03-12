import React from 'react';
import styles from './Hero.scss';
import PropTypes from 'prop-types';

const Hero = props => (
  <header className={styles.component}>
      <h2 className={styles.title}>{props.titleText}</h2>
      <img src={props.imageSource} className={styles.image}/>
  </header>
);

Hero.propTypes = {
  titleText: PropTypes.node.isRequired,
  imageSource: PropTypes.string.isRequired,
};

export default Hero; 