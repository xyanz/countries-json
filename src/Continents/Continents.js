import React, { Component } from 'react';
import axios from 'axios';
import Continent from '../Continents/Continent';


class Continents extends Component {
  state = {
    continentData: null,
  }

  componentDidMount () {
    const API_KEY = 'AIzaSyCFrzbNno7nZL0yDWinW5SGJo1xlmpDKCA';
    axios.get('https://raw.githubusercontent.com/curran/data/gh-pages/un/placeHierarchy/countryHierarchy.json')
    .then((response => {
      console.log("response", response.data.children)
      this.setState({
        continentData: response.data.children
      })
    }))
  }

  getCountryHandler = () => {
    let continentList = Object.keys(this.state.continentData)
        .map(continent => {
          <Continent
            continentName={this.state.continentData[continent].data.id}
          />
        })
      this.setState({
        continentList: continentList
      })
  }

  render() { 
    console.log("render", this.state)
    
    let continentList = Object.keys(this.state.continentData)
      .map(continent => {
        <Continent
          continentName={this.state.continentData[continent].data.id}
          />
        })
        this.setState({
        continentList: continentList
      })
    return ( 
      <div>
        <h1>
          Country Data
        </h1>
        <button onClick={this.getCountryHandler}>Get Countries</button>
        <div>
          
        </div>
        <div>
          {continentList ? continentList : <p>loading</p>}
        </div>
      </div>
     )
  }
}
 
export default Continents;