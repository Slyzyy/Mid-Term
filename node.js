require('dotenv').config();

const express = require('express')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
  console.log(error)
})

database.once('connected', () => {
  console.log('Database Connected')
})

const routes = require('./routes/routes');
const app = express()
const port = 3000

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended : true,
  }),
);

app.use(express.json());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})