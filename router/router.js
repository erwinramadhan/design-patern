const router = require("express").Router()

const book = require("./controllers/bookController")

router.get("/books", book.index)
router.get("/books/show/:id", book.show)
router.get("/books/new", book.new)
router.post("/books", book.create)

module.exports = router