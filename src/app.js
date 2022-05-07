const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const Routes = require('./routes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api', Routes);

app.get('/', (_req, res) => {
  res.send('Hello World!');
});

module.exports = app;