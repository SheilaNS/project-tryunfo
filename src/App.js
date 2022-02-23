import React from 'react';
import Form from './components/Form';
import './assets/App.css';
import Card from './components/Card';

class App extends React.Component {
  render() {
    return (
      <>
        <header>
          <h1>Tryunfo</h1>
        </header>
        <main>
          <Form />
          <Card />
        </main>
      </>
    );
  }
}

export default App;
