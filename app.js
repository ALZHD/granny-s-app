const express = require('express');
const hbs = require('hbs');
require('dotenv').config();
const path = require('path');
const regofUser = require('./routes/regofUser');

const app = express();
// app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
hbs.registerPartials(path.join(process.env.PWD, 'views', 'partials'));

app.use(express.urlencoded({ extended: true })); // чтобы парсить форма
app.use(express.json()); // чтобы парсить json
app.use(express.static(path.join(__dirname, 'public')));
const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.render('index');
});

app.use('/', regofUser);
app.listen(PORT, () => console.log(`Connection on PORT: ${PORT}`));
