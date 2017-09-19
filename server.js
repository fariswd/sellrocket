const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

mongoose.connect('mongodb://admin:admin@ds141464.mlab.com:41464/hacktivcash', {
  useMongoClient: true
})
mongoose.Promise = global.Promise

app.use(bodyParser.json())
const product = require('./controllers/product.js')(app)

app.get('/', (request, response) => {
   response.send('OK');
})

app.listen(3000, () =>{
  console.log('Server is listening...');
})
