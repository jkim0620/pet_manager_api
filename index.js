require('dotenv').config();

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//   extended: true,
// }));

// app.get('/hello', (req, res) => {
//   res.send('Hello World');
// });

app.use(require('./resources'));

// app.get('/owners', (req, res) => {
//   let data = [];
//   res.json(data);
// });
//
// app.post('/owners', (req, res) => {
//   let data = {};
//   res.status(201).json(data);
// });

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

module.exports = app;
