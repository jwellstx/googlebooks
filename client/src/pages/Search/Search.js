import React, { Component } from "react";
import "./Search.css";
import API from "../../utils/API";
import Book from "../../components/Book/Book";
const axios = require("axios");

class Search extends Component {
  state = {
    books: [],
    book: "",
  };

  componentDidMount() {
    // var bookData = axios
    //   .get(
    //     "https://www.googleapis.com/books/v1/volumes?q=james+and+giant_peach"
    //   )
    //   .then((res) => console.log(res));
    // console.log(bookData);
    // this.setState({})
    // API.getBooks();
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    const searchValue = this.state.book.replace(/\s/, "+");
    const queryUrl =
      "https://www.googleapis.com/books/v1/volumes?q=" + searchValue;
    axios.get(queryUrl).then((res) => this.setState({ books: res.data.items }));
    console.log(this.state.books);
  };

  render() {
    return (
      <div className="container">
        <div className="center">
          <div><strong>Book to search:</strong> {this.state.book}</div>
          <input
            value={this.state.book}
            onChange={this.handleInputChange}
            name="book"
            placeholder="Search Books"
          ></input>
          <button onClick={this.handleFormSubmit}>Submit</button>
        </div>
        <br></br><br></br><br></br>
        {this.state.books.map((book) => <Book bookData={book.volumeInfo} />)}
      </div>
    );
  }
}

export default Search;
