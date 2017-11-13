import React from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Main from './components/Main';
import Navbar from './components/Navbar';

const App = () => (
  <MuiThemeProvider>
    <div>
      <Navbar />
      <div className="container">
        <Main />
      </div>
    </div>
  </MuiThemeProvider>
)

export default App;
