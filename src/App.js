import React, { Component } from "react";
import Movies from "./components/Movies";

class App extends Component {
  render() {
    return (
      <main className="container">
        <div className="starter-template">
          <h1>Movie Renter</h1>
        </div>
        <Movies />
      </main>
    );
  }
}

export default App;
