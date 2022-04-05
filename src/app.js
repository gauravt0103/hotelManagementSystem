var express = require("express")
var path = require("path")
var app = express()


const port = process.env.PORT || 3000

require("../src/db/connection")

app.set('views', path.join(__dirname, "views"))
app.set("view engine", "hbs")

app.use(express.static(__dirname + '/public'));

app.use(express.json());
app.use(express.urlencoded());

const studentRoute = require("../src/routes/studentRoute")
const roomRoute = require("../src/routes/roomRoute")

app.get("/HMS/home", (req, res) => {
    res.render('index')
})
app.get("/HMS/login", (req, res) => {
        res.render('login')
})

app.use("/HMS", studentRoute)
app.use("/HMS/room", roomRoute)






app.listen(port, () => {
    console.log("Connection Created Successfully")
})