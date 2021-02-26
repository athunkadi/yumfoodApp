const express = require('express');

const route = require('./routes');
const errorHandler = require('./middlewares/errorHandlers');

const app = express();

const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.use(route);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
})