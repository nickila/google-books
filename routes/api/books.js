const router = require("express").Router();
const booksController = require("../../controller/booksController");

router.route("/")
.get(booksController.findAll)
.post(booksController.create);
// console.log("3")


router.route("/:id")
.get(booksController.findById)
.put(booksController.update)
.delete(booksController.remove)

module.exports = router;