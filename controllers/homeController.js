module.exports = {
    index: (req, res) => res.render("index"),
    greet: (req, res) => {
        const name = req.query.name;
        res.render("greet", { name })
    }
}