const { Book } = require("../models")

module.exports = {
    create: (req, res) => {
        const { title, sinopsis, genre } = req.body
        Book.create({
            title: title,
            sinopsis: sinopsis,
            genre: genre
        })
            .then(() => res.redirect("/books"))
            .catch(err => res.send(`failed - ${JSON.stringify(err.message)}`))
    },
    new: (req, res) => {
        res.render("books/create", { title: "create new book" })
    },
    index: (req, res) => {
        Book.findAll({
            order: [
                ["id", "DESC"]
            ]
        })
            .then(result => res.render("books/index", { title: "Books", books: result }))
    },
    show: (req, res) => {
        Book.findOne({
            where: { id: Number(req.params.id) }
        })
            .then(result => {
                if (result !== null) {
                    res.render("book/show", { title: "Detail Books", book: result })
                } else {
                    res.status(404).send("Error - Book not found")
                }
            })
            .catch(err => res.status(404).send("Error - Book not Found"))
    }
}