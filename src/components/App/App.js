import React from 'react';
import styles from './App.scss';
import {pageContents, listData} from '../../data/dataStore';
import List from '../List/List';
import PropTypes from 'prop-types';

class App extends React.Component {
  state = {
    lists: [listData],
  }
  static propTypes = {
    title: PropTypes.node,
    subtitle: PropTypes.node,
    lists: PropTypes.array,
  }
  addList(title) {
    this.setState(state => ({
        lists: [
          ...state.lists, 
          {
            title,
            columns: [],
            description: 'Interesting things I want to check out!',
            image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
          },
        ],
      }
    ));
  }
  render() {
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{pageContents.title}</h1>
        <h2 className={styles.subtitle}>{pageContents.subtitle}</h2>
        {this.state.lists.map(
          ({key, ...listProps}) => (
            <List key={key} {...listProps}/>
          )
          )}
      </main>
    );
  }
}

export default App;
