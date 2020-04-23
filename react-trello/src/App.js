import React, {Component} from 'react';
import logo from './logo.svg';
import './App.scss';
import Main from './components/Main';
import Header from './components/Header';


class App extends Component {
  render() {
  return (
    
    <div className="app">
    <Header/>
    <Main/>
    </div>
 
  );
  }
}

export default App;
