import React from "react";
import "./Navbar.css";

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ""};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    handleSubmit(event) {
        event.preventDefault();
        if (this.state.value === "") {
            this.props.home();
        }
        else {
            this.props.section(this.state.value);
        }
    }

    render() {
        return (
            <div>
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
    }
}

export default Navbar;