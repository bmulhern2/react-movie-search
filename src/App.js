import React, { Component, setState } from 'react';
import axios from 'axios';
import Card from './Card';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      term: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit() {
    const options = {
      method: 'GET',
      url: 'https://movie-database-imdb-alternative.p.rapidapi.com/',
      params: {s: this.state.term, page: '1', r: 'json'},
      headers: {
        'x-rapidapi-key': '839d69ca53msh9e2994f9825c506p1ab5efjsn4bb0eb6f19d8',
        'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com'
      }
    };
    axios.request(options).then((res) => {
      console.log(res);
      let movies = [];
      res['data']['Search'].map((item) => {
        movies.push(item);
      });
      this.setState({ movies: movies });
    }).catch((error) => {
      console.error(error);
    })
  }
  handleChange(e) {
    e.preventDefault();
    this.setState({ term: e.target.value })
  }
  render() {
    return (
      <div>
        <nav>
          <input onChange={this.handleChange} placeholder="Search For A Movie" />
          <button onClick={this.handleSubmit}>Search</button>
        </nav>
        {this.state.movies.map((movie) => 
          <div>
            <>
              <Card title={movie.Title} type={movie.Type} image={movie.Poster} year={movie.Year} />
            </>
          </div>
        )}
      </div>
    )
  }
}
