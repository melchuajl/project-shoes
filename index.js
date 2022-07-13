// require('dotenv').config();
// const app = require('./routes');
 
// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

// const PORT = process.env.PORT; 
 
// app.listen(PORT, () => {
//     console.log(`Listening on port ${PORT}...`)
// })

const app = require('./routes');
app.listen(3000, () => {
  console.log('Listening to port 3000...');
  require("./bootstrap.js");
})