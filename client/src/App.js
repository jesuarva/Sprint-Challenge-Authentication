import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Register from './components/Register/Register';
import Login from './components/login/Login';
import Jokes from './components/Jokes/Jokes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/jokes" component={Jokes} />
      </div>
    );
  }
  componentDidMount() {
    const credential = localStorage.getItem('ay! la leche!');
    credential ? this.props.history.push('/jokes') : this.props.history.push('/register');
  }
}

export default withRouter(App);
