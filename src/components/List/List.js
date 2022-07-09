import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero';
import Column from '../Column/ColumnContainer';
import Creator from '../Creator/Creator';
import PropTypes from 'prop-types';
import {listData, settings} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';
import Container from '../Container/Container';

const List = ({title, description, columns, image, addColumn}) => (
  <Container>
    <section className={styles.component}>
      <Hero titleText={title} imageSource={image} />
      <div className={styles.description}>
        {ReactHtmlParser(description)}
      </div>
      <div className={styles.columns}>
        {columns.map(columnData => (
          <Column key={columnData.id} {...columnData}/>
        ))}
      </div>
      <div className={styles.creator}>
        <Creator text={settings.columnCreatorText} action={addColumn}/>
      </div>
    </section>
  </Container>
);

List.defaultProps = {
  description: settings.defaultListDescription,
  source: listData.image,
};

List.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  columns: PropTypes.array,
  image: PropTypes.string,
  addColumn: PropTypes.func,
};

export default List;