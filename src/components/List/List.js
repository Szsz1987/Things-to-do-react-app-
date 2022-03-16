import React from 'react';
import Hero from '../Hero/Hero';
import Column from '../Column/Column';
import styles from './List.scss';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    children: PropTypes.node,
    source: PropTypes.string,
  }
  static defaultProps = {
    children: <p>I can do all the things!!!</p>
  }
  render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} imageSource={this.props.source} />
          <div className={styles.description}>
            {ReactHtmlParser(this.props.description)}
          </div>
          <div className={styles.columns}>
            <Column title='Pierwsza'/>
            <Column title='Druga'/>
            <Column title='Trzecia'/>
          </div>
      </section>
    )
  }
}

export default List;