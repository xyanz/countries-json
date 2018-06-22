import React, { Component } from 'react';

class Search extends Component {
  state = {}

  handleSearch(event) {
    this.props.searchTyped(event.target.value)
  }

  render() { 
    return ( 
      <div>
        <label>Search</label>
        <input type="text" onKeyUp={this.handleSearch.bind(this)}/>
      </div>
     )
  }
}
 
export default Search;