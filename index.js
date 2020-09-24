const express = require('express');
const app = express();
const restaurantRouter = require('./routes/restaurants');

// app.get('/', (req, res) => {
//     res.send('<h1>Hello Aphiwit!</h1>')
// })

//use router 
app.use('/apis/restaurants', restaurantRouter)




app.listen(3000, () => {
    console.log("Server is runnning ....")
})