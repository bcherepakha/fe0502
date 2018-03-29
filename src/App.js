import React, { Component } from 'react';

import Header from './Header/Header';
import SearchForm from './SearchForm/SearchForm';
import BeerList from './BeerList/BeerList';

// import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
      searched: ''
  }

  searchChanged = value => this.setState({searched: value})

  render() {
    const {searched} = this.state;

    return <div className="app">
        <Header/>
        <SearchForm onChangeHandler={this.searchChanged}/>
        <BeerList searched={searched}/>
    </div>;
  }
}

export default App;
