const db = require("../models");

module.exports = {
    // find all books
    findAll: function(req, res) {
        db.Books.find().sort({title: 1})  // alphabetically
        .then(dbBooks => res.json(dbBooks))
        .catch(err => console.log(err));
    },
    // save a new book
    saveBook: function(req, res) {
        const bookData = req.body;

        db.Books.findOneAndUpdate({ title: bookData.title }, bookData, { new: true, upsert: true, setDefaultsOnInsert: true })
        .then(dbBook => res.json(dbBook))
        .catch(err => { throw err; });
    },
    // delete book based on id
    deleteBook: function(req, res) {
        db.Books.deleteOne({_id: req.params.id})
        .then(dbBokos => res.status(200).send());
    }
}