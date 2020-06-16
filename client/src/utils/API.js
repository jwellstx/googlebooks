import axios from "axios";

export default {
    getBooks: function() {
        return axios.get("/api/books");
    },
    saveBook: function(bookData) {
        return axios.post("/api/books", bookData);
    },
    getBookById: function(id) {
        return axios.delete("/api/books/" + id);
    }
};