import React, { Component } from 'react';
import axios from 'axios';
import TextField from 'material-ui/TextField';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      apartments: [],
      universities: [],
      cities: [],
      errorText: ''
    }
  }

  getApartments() {
    if(this.refs.inputValue.getValue() === '') {
      this.setState({errorText: 'Apartment name required!'});
      return;
    }
    axios.get("http://localhost:3000/api/apartments", {
      params: {
        filter: {"where":{"name":{"regexp": "/" + this.refs.inputValue.getValue() + "/i"}}}
      }
    })
    .then( response => {
      this.setState({apartments: response.data}, () => {
        // console.log(this.state);
      })
    })
  }

  render() {
    const apartmentItems = this.state.apartments.map( (apartment, i) => {
      return (
        <li key={apartment.id}>{apartment.name}</li>
      )
    })
    return (
      <div>
        <h1>Search Page</h1>
        <TextField floatingLabelText="Apartment name" 
          hintText="Input name and click search" 
          ref="inputValue" 
          errorText={this.state.errorText}
        /><button onClick={this.getApartments.bind(this)}>Search</button>
        <ul>
          {apartmentItems}  
        </ul>
      </div>
    )
  }
}

export default Search;