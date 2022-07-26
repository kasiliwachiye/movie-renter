import React, { Component } from "react";

export default class LoginForm extends Component {
  handleSubmit = (e) => {
    e.preventdefault()
    console.log('Submitted')
  }

  render() {
    return (
      <div className="">
        <h1>Login</h1>
        <form className="w-50 p-3" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="email"
              className="form-control"
              id="username"
              aria-describedby="emailHelp"
              placeholder="Username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    );
  }
}
