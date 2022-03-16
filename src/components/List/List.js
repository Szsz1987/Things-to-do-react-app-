import React from 'react';
import Hero from '../Hero/Hero';
import Column from '../Column/Column';
import styles from './List.scss';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import {listData, settings} from '../../data/dataStore';

class List extends React.Component {
  state = {
    columns: this.props.columns || [],
  }
  static propTypes = {
    title: PropTypes.node.isRequired,
    description: PropTypes.node,
    columns: PropTypes.array,
    source: PropTypes.string,
  }
  static defaultProps = {
    description: settings.defaultListDescription,
    source: listData.image,
  }
  render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} imageSource={this.props.source} />
          <div className={styles.description}>
            {ReactHtmlParser(this.props.description)}
          </div>
          <div className={styles.columns}>
            {this.state.columns.map(({key, ...columnProps}) => (
              <Column key={key} {...columnProps}/>
            ))}
          </div>
      </section>
    )
  }
}

export default List;