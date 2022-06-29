import React, { Component } from "react";
import axios from "axios";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      searchInput: "pikachu",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.getPokemon = this.getPokemon.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      searchInput: event.target.value.toLowerCase(),
    });
  }

  getPokemon(event) {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${this.state.searchInput}`)
      .then((response) => {
        console.log(response.data);
        this.setState({
          pokemon: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
    event.preventDefault();
  }

  render() {
    return (
      <div className="app">
        {this.state.pokemon
          ? ((<h1>{this.state.pokemon.name}</h1>),
            (<img src={this.state.pokemon.sprites.front_default} />))
          : null}
        <form onSubmit={this.getPokemon}>
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
