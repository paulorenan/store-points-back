const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const Routes = require('./routes');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../swagger_output.json');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api', Routes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.get('/', (_req, res) => {
  res.send('Hello, if you are looking for the API documentation, please visit /api-docs');
});

module.exports = app;