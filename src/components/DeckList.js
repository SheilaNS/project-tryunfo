import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../assets/Card.css';

class DeckList extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      deleteButton,
    } = this.props;

    const isTrunfo = cardTrunfo ? (<p data-testid="trunfo-card">Super Trunfo</p>) : '';

    return (
      <div className="list-container">
        <div className="card-show">
          <p
            className="card-title"
            data-testid="name-card"
          >
            {cardName}
          </p>
          <div className="card-image">
            <img src={ cardImage } alt={ cardName } data-testid="image-card" />
          </div>
          <p className="card-descr" data-testid="description-card">{cardDescription}</p>
          <div className="card-attrs">
            <p data-testid="attr1-card">
              <span>Teor Alcoólico (%): </span>
              {cardAttr1}
            </p>
            <p data-testid="attr2-card">
              <span>IBU: </span>
              {cardAttr2}
            </p>
            <p data-testid="attr3-card">
              <span>???: </span>
              {cardAttr3}
            </p>
          </div>
          <div className="card-info">
            <p data-testid="rare-card">{cardRare}</p>
            {isTrunfo}
          </div>
        </div>
        <button
          type="button"
          data-testid="delete-button"
          onClick={ deleteButton }
          value={ cardName }
        >
          Excluir
        </button>
      </div>
    );
  }
}

DeckList.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  deleteButton: PropTypes.func.isRequired,
};

export default DeckList;
