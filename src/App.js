import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Tree from './Tree';
import Favorites from './Favorites';

class App extends Component {
  state = {
    data: null,
    favorites: []
  }

  componentDidMount () {
    axios.get('https://raw.githubusercontent.com/curran/data/gh-pages/un/placeHierarchy/countryHierarchy.json')
    .then((response => {
      this.setState({
        data: response.data.children
      })
    }))
  }

  handleFavoritesDelete = (item) => {
    let updatedFavorites = [];
    updatedFavorites = this.state.favorites.slice();
    let removeAtIndex = updatedFavorites.indexOf(item);
    updatedFavorites.splice(removeAtIndex,1);
    console.log("Removing ", item, " at index ", removeAtIndex);
    this.setState({
      favorites: updatedFavorites
    })
  }

  handleFavoritesAdd = (item) => {
    let updatedFavorites = [];
    updatedFavorites = this.state.favorites.slice();
    if (updatedFavorites.indexOf(item) == -1) {
      updatedFavorites.push(item)
    }
    console.log('favorites: ', updatedFavorites)
    this.setState({
      favorites: updatedFavorites
    })
  }

  render() {
    let tree = <p>loading...</p>;
    if (this.state.data) {
      tree = <Tree 
        clicked={this.handleFavoritesAdd}
        data={this.state.data} />
    }
    let favorites = <p>No Items Selected</p>
    if (this.state.favorites.length > 0) {
      favorites = <Favorites 
        clicked={this.handleFavoritesDelete}
        favorites={this.state.favorites}/>
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div>
          {favorites}
          {tree}
        </div>
      </div>
    );
  }
}

export default App;
