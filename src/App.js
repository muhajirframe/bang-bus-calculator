import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Kalkulator from './Kalkulator'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Bang-Bus Calculator</h2>
          </div>
          <Kalkulator data={[0, 2, 3 ,4]} />          
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
