import React from 'react';
import Hero from '../Hero/Hero';
import Column from '../Column/Column';
import styles from './List.scss';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import {listData, settings} from '../../data/dataStore';
import Creator from '../Creator/Creator';

class List extends React.Component {
  state = {
    columns: this.props.columns || [],
  }
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

  addColumn(title) {
    this.setState(state => (
      {
        columns: [
          ...state.columns,
          {
            key: state.columns.length ? state.columns[state.columns.length-1].key+1 : 0,
            title,
            icon: 'list-alt',
            cards: []
          }
        ]
      }
    ));
  }

  render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} imageSource={this.props.image} />
          <div className={styles.description}>
            {ReactHtmlParser(this.props.description)}
          </div>
          <div className={styles.columns}>
            {this.state.columns.map(({key, ...columnProps}) => (
              <Column key={key} {...columnProps}/>
            ))}
          </div>
          <div>
              <Creator text={settings.columnCreatorText} action={title => this.addColumn(title)}/>
          </div>
      </section>
    )
  }
}

export default List;