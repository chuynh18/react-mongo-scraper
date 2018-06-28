import React, { Component } from "react";
import "./App.css";
import API from "./utils/API";

class App extends Component {

    state = {
        value: "",
        pageContents: {}
    };

    scrapeHome = () => {
        API.scrapeHome()
        .then(res => {
            this.setState({pageContents: res.data});
            console.log(this.state.pageContents);
        })
    };

    scrapeSection(section) {
        API.scrapeSection(section)
        .then(res => {
            this.setState({pageContents: res.data});
            console.log(this.state.pageContents);
        })
    };

    viewSavedArticles() {
        API.viewSaved()
        .then(res => {
            this.setState({pageContents: res.data});
            console.log(this.state.pageContents);
        })
    };

    viewSavedArticle(article) {
        API.viewSpecificSaved(article)
        .then(res => {
            this.setState({pageContents: res.data});
            console.log(this.state.pageContents);
        })
    };

    handleChange = event => {
        this.setState({value: event.target.value});
    };

    handleSubmit = event => {
        event.preventDefault();
        if (this.state.value === "") {
            this.scrapeHome();
        }
        else {
            this.scrapeSection(this.state.value);
        }
    };

    render() {
        return (
            <div>
                <span><button onClick={this.viewSavedArticles}>View saved articles</button></span>
                <form onSubmit={this.handleSubmit}>
                    <label><span>NYT Section: </span>
                        <span><select value={this.state.value} onChange={this.handleChange}>
                            <option value="">Home page</option>
                            <option value="world">World</option>
                            <option value="us">U.S.</option>
                            <option value="politics">Politics</option>
                            <option value="nyregion">N.Y.</option>
                            <option value="business">Business</option>
                            <option value="opinion">Opinion</option>
                            <option value="technology">Tech</option>
                            <option value="science">Science</option>
                            <option value="health">Health</option>
                            <option value="sports">Sports</option>
                            <option value="arts">Arts</option>
                            <option value="books">Books</option>
                            <option value="fashion">Style</option>
                            <option value="food">Food</option>
                            <option value="travel">Travel</option>
                            <option value="magazine">Magazine</option>
                            <option value="t-magazine">T Magazine</option>
                            <option value="realestate">Real Estate</option>
                            <option value="obituaries">Obituaries</option>
                            <option value="learning">The Learning Network</option>
                            <option value="multimedia">Multimedia</option>
                        </select></span>
                    </label>
                    <span> <input type="submit" value="Scrape" /></span>
                </form>
            </div>
        );
    };
}

export default App;