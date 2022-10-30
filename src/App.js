import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

const TOTAL = 210;
const MAX = 90;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      deck: [],
      filterName: '',
      filterRare: '',
      filterTrunfo: false,
      filter: false,
    };
  }

  validAtrs = (num1, num2, num3) => {
    const sum = (num1 + num2 + num3) > TOTAL;
    const max = num1 > MAX || num2 > MAX || num3 > MAX;
    const min = num1 < 0 || num2 < 0 || num3 < 0;
    return sum || max || min;
  };

  isValid = () => {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;
    const str1 = cardName === '' || cardImage === '';
    const str2 = cardDescription === '' || cardRare === '';
    const nu = cardAttr1 === '0' || cardAttr2 === '0' || cardAttr3 === '0';
    const nu2 = cardAttr1 === '' || cardAttr2 === '' || cardAttr3 === '';
    const atrs = this.validAtrs(Number(cardAttr1), Number(cardAttr2), Number(cardAttr3));
    const isOk = str1 || str2 || nu || nu2 || atrs;
    this.setState({
      isSaveButtonDisabled: isOk,
    });
  };

  handleChange = ({ target }) => {
    this.setState(() => ({
      [target.name]: target.name === 'cardTrunfo' ? target.checked : target.value,
    }), this.isValid);
  };

  handleSave = (event) => {
    event.preventDefault();
    this.setState((prevState) => {
      const { deck, filterName, filterRare, isSaveButtonDisabled, ...card } = prevState;
      return ({
        cardName: '',
        cardDescription: '',
        cardAttr1: '0',
        cardAttr2: '0',
        cardAttr3: '0',
        cardImage: '',
        cardRare: 'normal',
        cardTrunfo: false,
        hasTrunfo: [...deck, { ...card }].some((elem) => elem.cardTrunfo),
        deck: deck.concat({
          id: card.cardName,
          ...card,
        }),
      });
    });
  };

  handleDelete = ({ target }) => {
    this.setState((prevState) => ({
      deck: prevState.deck.filter((elem) => elem.cardName !== target.id),
    }), () => {
      this.setState((prevState) => ({
        hasTrunfo: [...prevState.deck].some((elem) => elem.cardTrunfo),
      }));
    });
  };

  handleFilter = ({ target }) => {
    if (target.name === 'filterTrunfo') {
      return this.setState({
        filterTrunfo: target.checked,
        filter: target.checked,
      });
    }
    return this.setState({
      [target.name]: target.value === 'todas' ? '' : target.value.toLowerCase(),
      filter: false,
    });
  };

  render() {
    const { deck, filterName, filterRare, filterTrunfo, filter } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          { ...this.state }
          onInputChange={ this.handleChange }
          onSaveButtonClick={ this.handleSave }
        />
        <h2>Card</h2>
        <Card { ...this.state } />
        <h2>Deck</h2>
        <h4>Filtros</h4>
        <input
          data-testid="name-filter"
          type="text"
          name="filterName"
          value={ filterName }
          disabled={ filter }
          onChange={ this.handleFilter }
        />
        <select
          data-testid="rare-filter"
          name="filterRare"
          value={ filterRare }
          disabled={ filter }
          onChange={ this.handleFilter }
        >
          <option value="todas">Todas</option>
          <option value="normal">Normais</option>
          <option value="raro">Raras</option>
          <option value="muito raro">Muito raras</option>
        </select>
        <input
          data-testid="trunfo-filter"
          type="checkbox"
          name="filterTrunfo"
          checked={ filterTrunfo }
          onChange={ this.handleFilter }
        />
        <div id="deck-place">
          {filterTrunfo
            ? deck
              .filter((elem) => elem.cardTrunfo === filterTrunfo)
              .map((elem) => (
                <div key={ elem.id }>
                  <Card { ...elem } />
                  <button
                    data-testid="delete-button"
                    onClick={ this.handleDelete }
                    type="button"
                    id={ elem.cardName }
                  >
                    Excluir
                  </button>
                </div>
              ))
            : deck
              .filter((elem) => elem.cardName.toLowerCase().includes(filterName))
              .filter((elem) => (filterRare === 'raro' ? elem.cardRare === filterRare
                : elem.cardRare.includes(filterRare)))
              .map((card) => (
                <div key={ card.id }>
                  <Card { ...card } />
                  <button
                    data-testid="delete-button"
                    onClick={ this.handleDelete }
                    type="button"
                    id={ card.cardName }
                  >
                    Excluir
                  </button>
                </div>))}
        </div>
      </div>
    );
  }
}

export default App;
