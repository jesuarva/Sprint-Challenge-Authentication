import React, { Component } from 'react';
import axios from 'axios';

class Jokes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jokes: [],
    };
  }

  render() {
    console.log(this.state.jokes);
    return (
      <div>
        <h1>Jokes</h1>
        <ul>
          {this.state.jokes.map(joke => {
            return (
              <li>
                <h3>{joke.setup}</h3>
                <h4>{joke.punchline}</h4>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  componentDidMount() {
    const jwt = localStorage.getItem('ay! la leche!');
    axios
      .get('http://localhost:5000/api/jokes', { headers: { authorization: jwt } })
      .then(response => {
        console.log('response', response);
        this.setState({ jokes: response.data });
      })
      .catch(e => {
        console.log('error', e);
      });
  }
}

export default Jokes;
