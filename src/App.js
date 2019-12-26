import React from "react";
import quotes from "./quotedata.js";
import { FaTwitter } from "react-icons/fa";
import "./App.css";

const author = "#default";
const items = Object.entries(quotes);

let currentQuote = "Click for words of wisdom.";

const updateQuote2 = () => {};

// function updateQuote(newQuote) {
// document.getElementById("thequote").innerHTML =
// newQuote[0] + "<br /> <br /> -- " + newQuote[1];
// }

const changeQuote = () => {
  currentQuote = items[Math.round(items.length * Math.random())];
};

// document.getElementById("quotes").onclick = function randomQuote(obj) {
// let choice = items[Math.round(items.length * Math.random())];
// updateQuote(choice);
// };

// document.getElementById("twitbtn").onclick = function tweet() {
// let url = "https://twitter.com/intent/tweet?text=";
// let tweetThis = document.getElementById("thequote").innerText;
// window.open(url + tweetThis);
// };

function App() {
  return (
    <React.Fragment>
      <header>
        <h1>Q is for quote.</h1>
      </header>

      <div id="mainarea">
        <div onClick={changeQuote} id="thequote">
          {currentQuote}
        </div>
        <FaTwitter size={42} style={{ color: "rbga(89, 160, 236, 1.0)" }} />
      </div>
      <footer>
        <h6>These words of wisdom are brought to you by the letter Q.</h6>
      </footer>
    </React.Fragment>
  );
}

export default App;
