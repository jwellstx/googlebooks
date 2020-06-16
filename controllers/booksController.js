const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        console.log("finding all books");
        db.Books.find()
        .then(dbBooks => {
            console.log(dbBooks);
            res.json(dbBooks);
        })
        .catch(err => {
            console.log(err);
        });
    },
    saveBook: function(req, res) {
        console.log('trying to save a book');
        res.json("saveBook");
    },
    deleteBook: function(req, res) {
        console.log('trying to delete a book');
        res.json("deleteBook");
    }
}