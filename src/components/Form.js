import React, { Component } from 'react';
import '../assets/Form.css';

class Form extends Component {
  render() {
    return (
      <form>
        <label htmlFor="nome">
          Nome da carta:
          <input name="nome" id="nome" type="text" data-testid="name-input" />
        </label>
        <label htmlFor="descricao">
          Descrição da carta:
          <textarea name="desc-carta" id="descricao" data-testid="description-input" />
        </label>
        <label htmlFor="attr1">
          Atributo nº01:
          <input name="attr1" id="attr1" type="number" data-testid="attr1-input" />
        </label>
        <label htmlFor="attr2">
          Atributo nº02:
          <input name="attr2" id="attr2" type="number" data-testid="attr2-input" />
        </label>
        <label htmlFor="attr3">
          Atributo nº03:
          <input name="attr3" id="attr3" type="number" data-testid="attr3-input" />
        </label>
        <label htmlFor="image">
          URL da imagem:
          <input name="image" id="image" type="text" data-testid="image-input" />
        </label>
        <label htmlFor="rarid">
          Raridade da carta:
          <select name="raridade" id="rarid" data-testid="rare-input">
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>
        <label htmlFor="trunfo">
          É Super Tunfo?
          <input name="trunfo" id="trunfo" type="checkbox" data-testid="trunfo-input" />
        </label>
        <button type="submit" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

export default Form;
