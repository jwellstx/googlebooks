import React, { Component } from "react";
import "./Saved.css";
import API from "../../utils/API";
import Book from "../../components/Book/Book";

class Saved extends Component {
  state = {
    books: [],
  };

  componentDidMount() {
    API.getBooks().then((res) => {
      this.setState({ books: res.data });
    });
  }

  removeBookFromFavorites = (id) => {
    // API.removeBook(id);

    let array = [...this.state.books];
    array.splice(id, 1);
    this.setState({ books: array });
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="center">
            <div>
              <h1><strong>Saved Books</strong></h1>
            </div>
          </div>
          <br></br>
          {this.state.books.map((book, index) => (
            <Book
              key={index}
              id={index}
              bookData={book}
              action={this.removeBookFromFavorites}
              type="remove"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Saved;
