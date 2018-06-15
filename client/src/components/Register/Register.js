import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Register extends Component {
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
        Register
        <form onSubmit={this.handleSubmit} onChange={this.handleInput}>
          <input placeholder="username" type="text" id="name" name="username" value={this.state.username} />
          <br />
          <input placeholder="password" type="password" id="password" name="password" value={this.state.password} />
          <br />
          <button type="submit">Sigin</button>
          <br />
          <br />
          <Link to="/login">
            <button>Login</button>
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
    axios
      .post('http://localhost:5000/api/users', this.state)
      .then(response => {
        console.log('token', response.data.token);
        localStorage.setItem('ay! la leche!', response.data.token);
        this.props.history.push('/jokes');
      })
      .catch(e => {
        console.log('error', e);
      });
  };
}

export default Register;
