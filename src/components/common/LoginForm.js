import React, { Component } from "react";
import Input from "./Input";

export default class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({ account });
  };

  handleSubmit = (e) => {
    e.preventdefault();
    // Call the server
    console.log("Submitted");
  };

  render() {
    const { account } = this.state;

    return (
      <div className="d-flex justify-content-center">
        <form className="w-50 p-5 border" onSubmit={this.handleSubmit}>
          <h1>Login</h1>
          <Input
            label="Username"
            name="username"
            value={account.username}
            onChange={this.handleChange}
          />
          <Input
            label="Password"
            name="password"
            value={account.password}
            onChange={this.handleChange}
          />
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    );
  }
}
