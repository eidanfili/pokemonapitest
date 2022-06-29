import React, { Component } from "react";
import axios from "axios";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      searchInput: "pikachu",
      pokemon: {},
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      searchInput: event.target.value,
    });
  }

  getPokemon(event) {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${this.state.searchInput}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    event.preventDefault();
  }

  render() {
    return (
      <div className="app">
        <h1>{this.state.searchInput}</h1>
        <form>
          <input
            onChange={this.handleInputChange}
            type="text"
            placeholder="Search a Pokemon name"
          />
          <button>Search!</button>
        </form>
      </div>
    );
  }
}
