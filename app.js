const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const path = require('path');

const app = express();

app.set('view engine', 'hbs');
hbs.registerPartials(path.join(process.env.PWD, 'views', 'particals'));
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Connection on PORT: ${PORT}`));
