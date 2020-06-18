import React, { Component } from "react";
import "./JumboTron.css";

class JumboTron extends Component {
  // state = {  }
  render() {
    return (
      <div>
        <div className="jumbotron jumbotron-fluid center">
          <div className="container">
            <h1 className="display-4">Google Books Search API</h1>
            <p className="lead">
              Use this app to search Google's book database to find your favorite books and search for new ones.  As you search
              you can save and delete as you please.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default JumboTron;
