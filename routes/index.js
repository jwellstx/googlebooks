const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// Set all api routes to start with /api
router.use("/api", apiRoutes);

// hit index page if no api routes called
router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

module.exports = router;