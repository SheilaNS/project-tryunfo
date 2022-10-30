import React, { Component } from 'react';
import PropTypes from 'prop-types';
import form from '../assets/css/form.module.css';

export default class Form extends Component {
  render() {
    const {
      onSaveButtonClick,
      onInputChange,
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
    } = this.props;

    const isTrunfo = hasTrunfo ? <p>Você já tem um Super Trunfo em seu baralho</p> : (
      <label htmlFor="trunfo">
        <input
          data-testid="trunfo-input"
          id="trunfo"
          name="cardTrunfo"
          type="checkbox"
          checked={ cardTrunfo }
          onChange={ onInputChange }
        />
        Super Trybe Trunfo
      </label>
    );

    return (
      <form className={ form.formContainer }>
        <p>Nome</p>
        <input
          data-testid="name-input"
          name="cardName"
          value={ cardName }
          onChange={ onInputChange }
          type="text"
        />
        <p>Imagem</p>
        <input
          data-testid="image-input"
          name="cardImage"
          type="text"
          value={ cardImage }
          onChange={ onInputChange }
        />
        <p>Descrição</p>
        <textarea
          data-testid="description-input"
          name="cardDescription"
          value={ cardDescription }
          onChange={ onInputChange }
        />
        <p>Atributo 1</p>
        <input
          data-testid="attr1-input"
          name="cardAttr1"
          type="number"
          value={ cardAttr1 }
          onChange={ onInputChange }
        />
        <p>Atributo 2</p>
        <input
          data-testid="attr2-input"
          name="cardAttr2"
          type="number"
          value={ cardAttr2 }
          onChange={ onInputChange }
        />
        <p>Atributo 2</p>
        <input
          data-testid="attr3-input"
          name="cardAttr3"
          type="number"
          value={ cardAttr3 }
          onChange={ onInputChange }
        />
        <p>Pontos restantes = 000</p>
        <p>Raridade</p>
        <select
          data-testid="rare-input"
          name="cardRare"
          value={ cardRare }
          onChange={ onInputChange }
        >
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito raro</option>
        </select>
        <p>Total de pontos = 000</p>
        { isTrunfo }
        <button
          data-testid="save-button"
          type="submit"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  onSaveButtonClick: PropTypes.func,
  onInputChange: PropTypes.func,
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
}.isRequired;
