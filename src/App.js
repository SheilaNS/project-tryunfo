import React from 'react';
import Form from './components/Form';
import './assets/App.css';
import Card from './components/Card';
// import DeckList from './components/DeckList';
import CardFilter from './components/CardFilter';

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
    };
  }

  handleChange = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [target.name]: value }, this.validateButton);
  };

  handleSave = () => {
    const {
      deck,
    } = this.state;
    this.setState((beforeDeck) => (
      { cardName: '',
        cardDescription: '',
        cardAttr1: '0',
        cardAttr2: '0',
        cardAttr3: '0',
        cardImage: '',
        cardRare: 'normal',
        cardTrunfo: false,
        // hof .some feita com a ajuda do Gabriel Melo
        hasTrunfo: [...beforeDeck.deck, {
          cardName: beforeDeck.cardName,
          cardDescription: beforeDeck.cardDescription,
          cardAttr1: beforeDeck.cardAttr1,
          cardAttr2: beforeDeck.cardAttr2,
          cardAttr3: beforeDeck.cardAttr3,
          cardImage: beforeDeck.cardImage,
          cardRare: beforeDeck.cardRare,
          cardTrunfo: beforeDeck.cardTrunfo,
        }].some((card) => card.cardTrunfo),
        deck: deck.concat({
          listId: beforeDeck.cardName,
          cardName: beforeDeck.cardName,
          cardDescription: beforeDeck.cardDescription,
          cardAttr1: beforeDeck.cardAttr1,
          cardAttr2: beforeDeck.cardAttr2,
          cardAttr3: beforeDeck.cardAttr3,
          cardImage: beforeDeck.cardImage,
          cardRare: beforeDeck.cardRare,
          cardTrunfo: beforeDeck.cardTrunfo,
        }),
      }
    ));
  }

  // 'reverificação' do cardTrunfo feita com a ajuda do Danillo Gonçalves
  handleCheckTrunfo = () => {
    this.setState((beforeDeck) => ({
      hasTrunfo: [...beforeDeck.deck].some((card) => card.cardTrunfo),
    }));
  }

  handleDelete = ({ target }) => {
    this.setState((beforeDelete) => (
      {
        deck: beforeDelete.deck.filter((card) => card.cardName !== target.value),
      }), this.handleCheckTrunfo);
  }

  validateButton = () => {
    const { cardName, cardDescription, cardImage } = this.state;
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    let disabled = true;
    const ok1 = cardName.length !== 0;
    const ok2 = cardDescription.length !== 0;
    const ok3 = cardImage.length !== 0;
    if (ok1 && ok2 && ok3) {
      disabled = false;
    }
    const MAX_ALL = 210;
    const MAX_UN = 90;
    const soma = (+cardAttr1) + (+cardAttr2) + (+cardAttr3);
    const ok4 = soma > MAX_ALL;
    const ok5 = (+cardAttr1 > MAX_UN) || (+cardAttr1 < 0);
    const ok6 = (+cardAttr2 > MAX_UN) || (+cardAttr2 < 0);
    const ok7 = (+cardAttr3 > MAX_UN) || (+cardAttr3 < 0);
    if (ok4 || ok5 || ok6 || ok7) {
      disabled = true;
    }
    this.setState({ isSaveButtonDisabled: disabled });
  }

  render() {
    const { deck } = this.state;
    // const list = (deck.length !== 0)
    //   ? (
    //     <>
    //       <div className="list-title">
    //         <h2>Suas cartas</h2>
    //       </div>
    //       {deck.map((card, index) => (<DeckList
    //         { ...card }
    //         key={ index }
    //         deleteButton={ this.handleDelete }
    //       />))}
    //     </>)
    //   : '';
    return (
      <>
        <header>
          <h1>Tryunfo</h1>
        </header>
        <main>
          <div className="card-creation">
            <Form
              { ...this.state }
              onSaveButtonClick={ this.handleSave }
              onInputChange={ this.handleChange }
            />
            <Card
              { ...this.state }
            />
          </div>
          <div className="card-list">
            <CardFilter deck={ deck } />
          </div>
        </main>
      </>
    );
  }
}

export default App;
