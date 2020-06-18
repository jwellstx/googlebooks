const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// router that calls books controller to either find all books or save a book depending on post/get
router.route("/")
    .get(booksController.findAll)
    .post(booksController.saveBook);

// router to delete book based on id
router.route("/:id")
    .delete(booksController.deleteBook);

module.exports = router;