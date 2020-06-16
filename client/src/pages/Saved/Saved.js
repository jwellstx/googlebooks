import React, { Component } from 'react';
import "./Saved.css";
import API from "../../utils/API";

class Saved extends Component {
    // state = {  }

    componentDidMount() {
        console.log("mounting");
        API.getBooks();
    }

    render() { 
        return ( 
            <div>
                Saved Page
            </div>
         );
    }
}
 
export default Saved;