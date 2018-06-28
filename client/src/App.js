import React, { Component } from "react";
import "./App.css";
import API from "./utils/API";
import Navbar from "./components/Navbar";

class App extends Component {

  scrapeHome() {
    API.scrapeHome()
    .then(res => {
      console.log(res);
    })
  };

  scrapeSection(section) {
    API.scrapeSection(section)
    .then (res => {
      console.log(res);
    })
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Navbar
          home = {this.scrapeHome}
          section = {this.scrapeSection}
          />
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
