import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Parent from './Parent';
import store from './redux/store';
import { Provider } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Parent />
        </Provider>
      </div>
    );
  }
}

export default App;
