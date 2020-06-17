import React, { Component } from "react";
import "./Search.css";
import Book from "../../components/Book/Book";
const axios = require("axios");

class Search extends Component {
  state = {
    books: [],
    book: "",
  };

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
  };

  bookAddedToFavorites = (id) => {
    let array = [...this.state.books];
    array.splice(id, 1);
    this.setState({ books: array });
  };

  render() {
    return (
      <div className="container">
        <div className="center">
          <div>
            <strong>Book to search:</strong> {this.state.book}
          </div>
          <input
            value={this.state.book}
            onChange={this.handleInputChange}
            name="book"
            placeholder="Search Books"
          ></input>
          <button onClick={this.handleFormSubmit}>Submit</button>
        </div>
        <br></br>
        <br></br>
        <br></br>
        {this.state.books.map((book, index) => {
          const bookInfo = {
            authors: book.volumeInfo.authors.join(", ").replace(/,$/, ""),
            title: book.volumeInfo.title,
            description: book.volumeInfo.description,
            image: book.volumeInfo.imageLinks.thumbnail,
            link: book.volumeInfo.infoLink
          }

          return <Book key={index} id={index} bookData={bookInfo} action={this.bookAddedToFavorites} type="add" />;
        })}
      </div>
    );
  }
}

export default Search;
