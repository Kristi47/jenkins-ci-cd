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

app.get('/kristi', (req, res) => {
    res.send("kristi page")
})

app.get('/test', (req, res) => {
    res.send("test page")
})

app.get('/test2', (req, res) => {
    res.send("test2 page")
})

app.get('/test3', (req, res) => {
    res.send("test3 page")
})

app.get('/test4', (req, res) => {
    res.send("test4 page")
})

app.get('/test5', (req, res) => {
    res.send("test5 page")
})

app.get('/test6', (req, res) => {
    res.send("test6 page")
})

app.get('/test7', (req, res) => {
    res.send("test7 page")
})

app.listen(3000, ()=>{
    console.log("Server listening on port 3000")
})


