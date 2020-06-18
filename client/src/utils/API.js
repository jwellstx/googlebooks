import axios from "axios";

export default {
    // get all the books
    getBooks: function() {
        return axios.get("/api/books");
    },
    // save a new book to mongodb
    saveBook: function(bookData) {
        return axios.post("/api/books", bookData);
    },
    // delete a book based on id from mongodb
    deleteBook: function(id) {
        return axios.delete("/api/books/" + id);
    }
};