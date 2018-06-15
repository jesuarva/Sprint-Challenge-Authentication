import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }
  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit} onChange={this.handleInput}>
          <input placeholder="username" type="text" id="name" name="username" value={this.state.username} />
          <br />
          <input placeholder="password" type="password" id="password" name="password" value={this.state.password} />
          <br />
          <button type="submit">Sigin</button>
          <br />
          <br />
          <Link to="/register">
            <button>Register</button>
          </Link>
        </form>
      </div>
    );
  }

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post('http://localhost:5000/api/login', this.state)
      .then(response => {
        console.log('response', response);
        const token = response.data.token;
        localStorage.setItem('ay! la leche!', token);
        this.props.history.push('/jokes');
      })
      .catch(e => {
        console.log('error', e);
      });
  };
}

export default Login;
