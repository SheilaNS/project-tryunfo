import React, { Component } from 'react';
import '../assets/Form.css';
import PropTypes from 'prop-types';

class Form extends Component {
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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    const isSuper = hasTrunfo
      ? (<p>Você já tem um Super Trunfo em seu baralho</p>)
      : (
        <input
          checked={ cardTrunfo }
          onChange={ onInputChange }
          name="cardTrunfo"
          id="trunfo"
          type="checkbox"
          data-testid="trunfo-input"
        />
      );

    return (
      <form>
        <label htmlFor="cardName">
          Nome da carta:
          <input
            value={ cardName }
            onChange={ onInputChange }
            name="cardName"
            id="nome"
            type="text"
            data-testid="name-input"
          />
        </label>
        <label htmlFor="descricao">
          Descrição da carta:
          <textarea
            value={ cardDescription }
            onChange={ onInputChange }
            name="cardDescription"
            id="descricao"
            data-testid="description-input"
          />
        </label>
        <label htmlFor="attr1">
          Atributo nº01:
          <input
            value={ cardAttr1 }
            onChange={ onInputChange }
            name="cardAttr1"
            id="attr1"
            type="number"
            data-testid="attr1-input"
          />
        </label>
        <label htmlFor="attr2">
          Atributo nº02:
          <input
            value={ cardAttr2 }
            onChange={ onInputChange }
            name="cardAttr2"
            id="attr2"
            type="number"
            data-testid="attr2-input"
          />
        </label>
        <label htmlFor="attr3">
          Atributo nº03:
          <input
            value={ cardAttr3 }
            onChange={ onInputChange }
            name="cardAttr3"
            id="attr3"
            type="number"
            data-testid="attr3-input"
          />
        </label>
        <label htmlFor="image">
          URL da imagem:
          <input
            value={ cardImage }
            onChange={ onInputChange }
            name="cardImage"
            id="image"
            type="text"
            data-testid="image-input"
          />
        </label>
        <label htmlFor="rarid">
          Raridade da carta:
          <select
            value={ cardRare }
            onChange={ onInputChange }
            name="cardRare"
            id="rarid"
            data-testid="rare-input"
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>
        <label htmlFor="trunfo">
          É Super Tunfo?
          {isSuper}
        </label>
        <button
          type="button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          data-testid="save-button"
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
