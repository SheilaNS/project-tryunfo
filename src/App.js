import React from 'react';
import Form from './components/Form';
import './assets/App.css';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    };
  }

  handleChange = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({ [target.name]: value }, () => this.validateButton());
  };

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
    const ok5 = +cardAttr1 > MAX_UN || +cardAttr1 < 0;
    const ok6 = +cardAttr2 > MAX_UN || +cardAttr2 < 0;
    const ok7 = +cardAttr3 > MAX_UN || +cardAttr3 < 0;
    if (ok4 || ok5 || ok6 || ok7) {
      disabled = true;
    }
    this.setState({ isSaveButtonDisabled: disabled });
  }

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
      isSaveButtonDisabled,
    } = this.state;
    return (
      <>
        <header>
          <h1>Tryunfo</h1>
        </header>
        <main>
          <Form
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onSaveButtonClick={ this.handleSave }
            onInputChange={ this.handleChange }
          />
          <Card
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
          />
        </main>
      </>
    );
  }
}

export default App;
