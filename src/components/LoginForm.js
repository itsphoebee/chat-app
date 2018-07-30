import React, { Component } from 'react';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: ''
    };
  }


  // get username from form
  handleUsername = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  // form submission, update state
  handleOnSubmit = (event) => {
    event.preventDefault();
    this.setState({
      loggedin: true,
      username: this.state.username
    })
  }

  render() {
      return (
        <div className="login">
        <h1>Welcome</h1>
          <form onSubmit={this.handleOnSubmit}>
            <input
              type="text"
              placeholder="Username"
              onChange={this.handleUsername}
              required />
              <br/><br/>
            <button type="submit">
              Login
            </button>
          </form>
        </div>
      );
    }
  }
