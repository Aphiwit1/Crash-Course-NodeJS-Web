const express = require('express');
const router = express.Router();

//get
router.get('/', (req, res) => {
    res.send("Get API")
})

//get with param
router.get('/:id', (req, res) => {
    res.send("Get one API")
})

//post
router.post('/', (req, res) => {
    res.send("Post API")
})

//put
router.put('/:id', (req, res) => {
    res.send("Put API")
})

//delete
router.delete('/:id', (req, res) => {
    res.send("Delete API")
})

module.exports = router;
