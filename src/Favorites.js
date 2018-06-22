import React, { Component } from 'react';
import Favorite from './Favorite';

class Favorites extends Component {
  render() { 
    console.log('inside favorites', this.props)
    const favoritesList = this.props.favorites.map((favorite => {
      return <Favorite 
        clicked={this.props.clicked}
        key={favorite}
        name={favorite} />
    }))
    return ( 
      <div>
        {favoritesList}
      </div>
     )
  }
}
 
export default Favorites;
