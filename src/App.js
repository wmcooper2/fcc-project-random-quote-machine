import React from "react";
import quotes from "./quotedata.js";
import { FaTwitter } from "react-icons/fa";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: (
        <React.Fragment>
          <p>Click for here words of wisdom</p>
          <p>Tweet a quote that you like with the little birdy below.</p>
        </React.Fragment>
      ),
      author: "",
      allQuotes: Object.entries(quotes),
      color: "rbg(89, 160, 236)",
    };
    this.changeQuote = this.changeQuote.bind(this);
    this.tweetQuote = this.tweetQuote.bind(this);
  }

  changeQuote = () => {
    let items = this.state.allQuotes;
    let choice = items[Math.round(items.length * Math.random())];
    let newQuote = choice[0];
    let newAuthor = choice[1];
    this.setState({
      quote: newQuote,
      author: newAuthor,
    });
  };

  tweetQuote = () => {
    let url = "https://twitter.com/intent/tweet?text=";
    window.open(url + this.state.quote + "(" + this.state.author + ")");
  };

  render() {
    return (
      <React.Fragment>
        <h1>Q is for quote</h1>
        <div id="mainarea">
          <div onClick={this.changeQuote} id="thequote">
            {this.state.quote}
            <br />
            <br />
            {this.state.author}
          </div>
          <a href="_blank">
            <FaTwitter
              size={42}
              style={{ color: this.state.color }}
              onClick={this.tweetQuote}
            />
          </a>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
