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
    // check for book to searech
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  
  handleFormSubmit = (event) => {
    // find search value, query google books api then update state with list of books
    const searchValue = this.state.book.replace(/\s/, "+");
    const queryUrl =
      "https://www.googleapis.com/books/v1/volumes?q=" + searchValue;
    axios.get(queryUrl).then((res) => this.setState({ books: res.data.items }));
    this.setState({book: ""});  // clear book
  };

  bookAddedToFavorites = (id) => {
    // remove book from search page if clicked "add to favorites"
    let array = [...this.state.books];
    array.splice(id, 1);
    this.setState({ books: array });
  };

  enterPressed = (event) => {
    // if some hits enter, force handleformsubmit
    const code = event.keyCode || event.which;
    if(code === 13) {  // enter key
      this.handleFormSubmit();
    }
  }

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
            onKeyPress={this.enterPressed}
          ></input>
          <button onClick={this.handleFormSubmit} >Submit</button>
        </div>
        <br></br>
        <br></br>
        <br></br>
        {this.state.books.length === 0 ? (<h1 className="center">No books found... Please enter a book and click submit to perform a search!</h1>) : <div></div> } 
        {this.state.books.map((book, index) => {
          const bookInfo = {
            authors: book.volumeInfo.authors.join(", ").replace(/,$/, ""),
            title: book.volumeInfo.title,
            description: book.volumeInfo.description,
            image: book.volumeInfo.imageLinks.thumbnail,
            link: book.volumeInfo.infoLink
          }
          return <Book key={index} id={index} bookData={bookInfo} action={this.bookAddedToFavorites} type="save" />;
        })}
      </div>
    );
  }
}

export default Search;
