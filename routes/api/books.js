const router = require("express").Router();
const booksController = require("../controller/booksController");

router.route("/api/books").post(booksController.create);

module.exports = router;