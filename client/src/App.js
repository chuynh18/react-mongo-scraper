import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import API from "./utils/API";

class App extends Component {

  scrapeHome() {
    API.scrapeHome()
    .then(res => {
      console.log(res);
    })
  }

  componentDidMount() {
    this.scrapeHome();
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>test</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;