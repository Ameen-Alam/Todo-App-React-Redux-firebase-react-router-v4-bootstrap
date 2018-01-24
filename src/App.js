import React, { Component } from 'react';
import './App.css';
import store from './store';
import {Provider} from 'react-redux'
import Routes from './Routes'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}

export default App;
