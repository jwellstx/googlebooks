const router = require("express").Router();
const bookRoutes = require("./books");

// make all api routes use /api/books/
router.use("/books", bookRoutes);

module.exports = router;