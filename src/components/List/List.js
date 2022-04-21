import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';
import {listData, settings} from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    description: PropTypes.node,
    columns: PropTypes.array,
    image: PropTypes.string,
  }
  static defaultProps = {
    description: settings.defaultListDescription,
    source: listData.image,
  }
  render(){
    const {title, description, columns, image} = this.props;
    return (
      <section className={styles.component}>
        <Hero titleText={title} imageSource={image}/>
        <div className={styles.description}>
          {ReactHtmlParser(description)}
        </div>
        <div className={styles.columns}>
          {columns.map(columnData => (
            <Column key={columnData.id} {...columnData}/>
          ))}
        </div>
        {/*
          <div className={styles.creator}>
            <Creator text={settings.columnCreatorText/ action={title => this.addColumn(title)}>
          </div>
        */}
      </section>
    );
  }
}

export default List;