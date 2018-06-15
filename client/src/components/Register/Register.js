import React, { Component } from 'react';
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
    return <div>Register</div>;
  }

  handleInput = () => {};
  handlerSubmit = () => {};
}

export default Register;
