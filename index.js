require('dotenv').config();
const app = require('./routes');
const { testConnection } = require('./models/index'); 

testConnection();
 
app.get('/', function (req, res) {
  res.send('Hello World')
})

const PORT = process.env.PORT; 
 
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`)
})
