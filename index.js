// require('dotenv').config()
// const express = require('express')
// const app = express()
 
// app.get('/', function (req, res) {
//   res.send('Hello World')
// })
 
// app.listen(process.env.PORT)


const app = require('./routes/main.index');
app.listen(3008, () => {
  console.log('Listening to port 3008...');
})