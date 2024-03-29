const router = require("express").Router();
const bookController = require("../../Controller/bookController");

// Matches with "/api/books"
router
  .route("/")
  .get(bookController.findAll)
  .post(bookController.create);

// Matches with "/api/books/:id"
router.route("/:id").delete(bookController.remove);

module.exports = router;
