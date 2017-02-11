import React from 'react';
import Card from './card';

export default class CardList extends React.Component {
  render() {
    const { cards, title } = this.props;

    return (
      <div className="card-list">
        <h4>{title}</h4>
        {
          cards.map(card => {
            return <Card text={card}></Card>;
          })
        }
      </div>
    )
  }
}