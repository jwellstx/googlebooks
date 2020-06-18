import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Nav from "./components/Nav/Nav";
import Search from "./pages/Search/Search";
import Saved from "./pages/Saved/Saved";
import JumboTron from "./components/JumboTron/JumboTron";
import Footer from "./components/Footer/Footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <JumboTron />
          <Switch>
            <Route exact path="/saved" component={Saved} />
            <Route component={Search} />
          </Switch>
          <br></br>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
