import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import "./Book.css";

class Book extends Component {
  handleThisBook = () => {
    // if this is a book on the saved page, delete the book.  if its on teh search page, save the book
    this.props.type === "save" ? API.saveBook(this.props.bookData) : API.deleteBook(this.props.bookData._id);
    const id = this.props.id;
    this.props.action(id); // this action is to remove the book in Search parent component list
  };

  render() {
    const { authors, title, description, image, link } = this.props.bookData;
    return (
      <div>
        <img
          alt={title}
          style={{ float: "left", marginRight: "40px", marginBottom: "20px" }}
          src={image}
        />
        <p>
          <strong>Title:</strong> {title}
        </p>
        <p>
          <strong>Authors:</strong> {authors}
        </p>
        <br></br>
        <p>
          <strong>Description:</strong> {description}
        </p>
        <p>
          <a href={link}>
            <strong>Click here to view the book on Google.</strong>
          </a>
          <br></br>
          <br></br>
          <button
            className={`btn btn-${this.props.type === "save" ? "primary" : "danger"}`}
            onClick={this.handleThisBook}>
            {this.props.type === "save" ? "Save Book!" : "Remove!"}
          </button>
          {this.props.type === "save" ? <button className="btn btn-primary mx-4"><Link className="gosave" to={"/saved"}>Goto Saved!</Link></button> : <div></div>}
        </p>
        <hr></hr>
      </div>
    );
  }
}

export default Book;
