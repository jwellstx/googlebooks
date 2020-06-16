import React, { Component } from "react";

export default function Book(props) {
    const { authors, title, description, imageLinks, infoLink} = props.bookData
    const authorsJoined = authors.join(", ").replace(/,\s$/, "");
    return (
      <div>
        <img style={{ float: "left", marginRight: "40px" }} src={imageLinks.thumbnail} />
        <p>
          <strong>Title:</strong> {title}
        </p>
        <p>
            <strong>Authors:</strong> {authorsJoined}
            {/* {authors.map((author) => (<span> {author},</span>))} */}
        </p>
        <br></br>
        <p>
          <strong>Description:</strong> {description}
        </p>
        <p>
          <a href={infoLink}>
            <strong>Click here to view the book on Google.</strong>
          </a>
        </p>
        <hr></hr>
      </div>
    );
  }
