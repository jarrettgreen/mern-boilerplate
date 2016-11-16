equire('dotenv').config();
import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'

// Setup Mongoose
// Set native promises as mongoose promise
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_DB_HOST, (error) => {
  if (error) {
    console.error('Please make sure Mongodb is installed and running!'); // eslint-disable-line no-console
    throw error;
  }
});

var port = process.env.PORT || 8080;
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const server = app.listen(port);
