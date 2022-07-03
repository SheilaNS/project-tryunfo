import React from 'react';
import PropTypes from 'prop-types';
import DeckList from './DeckList';

class CardFilter extends React.Component {
  render() {
    const { deck } = this.props;
    const list = (deck.length !== 0)
      ? (
        <>
          <div className="list-title">
            <h2>Suas cartas</h2>
          </div>
          {deck.map((card, index) => (<DeckList
            { ...card }
            key={ index }
            deleteButton={ this.handleDelete }
          />))}
        </>)
      : '';

    return (
      { list }
    );
  }
}

CardFilter.propTypes = {
  deck: PropTypes.shape({
    cardName: PropTypes.string.isRequired,
    cardDescription: PropTypes.string.isRequired,
    cardAttr1: PropTypes.string.isRequired,
    cardAttr2: PropTypes.string.isRequired,
    cardAttr3: PropTypes.string.isRequired,
    cardImage: PropTypes.string.isRequired,
    cardRare: PropTypes.string.isRequired,
    cardTrunfo: PropTypes.bool.isRequired,
  }),
}.isRequired;

export default CardFilter;
