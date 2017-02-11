import React from 'react';
import CardList from './card-list';

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    console.log('test');
  }
  render() {
    const { lists, title } = this.props;
    const iterate = lists.map(list => <CardList title={list.title} cards={list.cards}></CardList>);
    return (
      <div>
        <h3>{ title }</h3>
        { iterate }
      </div>
    );
  }
}