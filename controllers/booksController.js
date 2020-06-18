const db = require("../models");

module.exports = {
    findAll: function(req, res) {
        db.Books.find().sort({title: 1})  // alphabetically
        .then(dbBooks => res.json(dbBooks))
        .catch(err => console.log(err));
    },
    saveBook: function(req, res) {
        const bookData = req.body;

        db.Books.findOneAndUpdate({ title: bookData.title }, bookData, { new: true, upsert: true, setDefaultsOnInsert: true })
        .then(dbBook => res.json(dbBook))
        .catch(err => { throw err; });
    },
    deleteBook: function(req, res) {
        db.Books.deleteOne({_id: req.params.id})
        .then(dbBokos => res.status(200).send());
    }
}