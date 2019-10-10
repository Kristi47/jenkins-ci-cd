const express = require('express')
const bodyParser = require('body-parser')

let app = express()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("index page")
})

app.get('/home', (req, res) => {
    res.send("home page")
})

app.get('/about', (req, res) => {
    res.send("about us page")
})

app.get('/contact', (req, res) => {
    res.send("contact us page")
})

app.listen(3000, ()=>{
    console.log("Server listening on port 3000")
})


