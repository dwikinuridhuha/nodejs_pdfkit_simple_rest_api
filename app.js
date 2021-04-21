const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

const PORT = 8080 || process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('./routes/index'));

app.listen(PORT, () => {
  console.log(`running in server ${PORT}`);
});