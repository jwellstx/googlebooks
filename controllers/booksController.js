const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        console.log("finding all books");
        db.Books.find().sort({title: 1})  // alphabetically
        .then(dbBooks => {
            console.log(dbBooks);
            res.json(dbBooks);
        })
        .catch(err => {
            console.log(err);
        });
    },
    saveBook: function(req, res) {
        const bookData = req.body;

        db.Books.findOneAndUpdate({ title: bookData.title }, bookData, { new: true, upsert: true, setDefaultsOnInsert: true })
        .then(dbBook => console.log(dbBook))
        .catch(err => { throw err; });
    },
    deleteBook: function(req, res) {
        console.log('trying to delete a book');
        res.json("deleteBook");
    }
}