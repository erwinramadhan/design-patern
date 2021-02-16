const express = require("express")
const app = express()
const router = require("./router")

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.set("view engine", "ejs")
app.use(router)

app.listen(3000, () => console.log("Server Berjalan"))