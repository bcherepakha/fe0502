import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Header from './Header/Header';
import SearchForm from './SearchForm/SearchForm';
import BeerList from './BeerList/BeerList';
import Loader from './Loader/Loader.jsx';
import Favourites from './Favourites/Favourites';

// import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
      searched: ''
  }

  searchChanged = value => this.setState({searched: value})

  render() {
    const {searched} = this.state;

    return <Router>
        <div className="app">
            <Header/>

            <Switch>
                <Route exact path='/' render={() => [
                    <SearchForm key='SearchForm' onChangeHandler={this.searchChanged}/>,
                    <BeerList key='BeerList' searched={searched}/>
                ]}/>

                <Route path='/favourites' component={Favourites}/>
            </Switch>

            <Loader/>
        </div>
    </Router>
  }
}

export default App;
