const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Hello Aphiwit!</h1>')
})

//get
app.get('/apis/restaurants', (req, res) => {
    res.send("Get API")
})

//get with param
app.get('/apis/restaurants/:is', (req, res) => {
    res.send("Get one API")
})

//post
app.post('/apis/restaurants', (req, res) => {
    res.send("Post API")
})

//put
app.put('/apis/restaurants/:id', (req, res) => {
    res.send("Put API")
})

//delete
app.delete('/apis/restaurants/:id', (req, res) => {
    res.send("Delete API")
})




app.listen(3000, () => {
    console.log("Server is runnning ....")
})