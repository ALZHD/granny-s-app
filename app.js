<<<<<<< HEAD
const express = require('express');
const hbs = require('hbs');
require('dotenv').config();
const path = require('path');
const session = require('express-session');
const sessionFileStore = require('session-file-store');
const regofUser = require('./routes/regofUser');
const uploadRouter = require('./routes/uploadRouter');
=======
const express = require('express'); 
const hbs = require('hbs'); 
require('dotenv').config(); 
const path = require('path'); 
const regofUser = require('./routes/regofUser');
const indexRouter = require('./routes/index.router');
const pictureRouter = require('./routes/pictures.router');

const app = express(); 
const session = require('express-session')
const sessionFileStore = require('session-file-store')
>>>>>>> 65fb1062bf9c054d742d7712e46eb9bce73662d4

const FileStore = sessionFileStore(session);
// app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
hbs.registerPartials(path.join(process.env.PWD, 'views', 'partials')); // 10

app.use(express.urlencoded({ extended: true })); // чтобы парсить форма
app.use(express.json()); // чтобы парсить json
const sessionConfig = {
  name: 'user_sid', // Имя куки для хранения id сессии. По умолчанию - connect.sid
  secret: process.env.SESSION_SECRET ?? 'blabla', // Секретное слово для шифрования, может быть любым
  store: new FileStore(),
  resave: false, // Пересохранять ли куку при каждом запросе
  saveUninitialized: false, // Создавать ли сессию без инициализации ключей в req.session
  cookie: {
    // maxAge: 10000,
    maxAge: 1000 * 60 * 60 * 12, // Срок истечения годности куки в миллисекундах
    httpOnly: true, // Серверная установка и удаление куки, по умолчанию true
  },
};

app.use(session(sessionConfig));
app.use(express.static(path.join(__dirname, 'public')));
const PORT = process.env.PORT || 3001;

/* app.get('/', (req, res) => { // чтобы проверить что это работает делаем ручку
  res.render('index'); // при запросе на эту ручку рендерим с index --> npm start (как работает render? Берется все что находится в индексе  и как бы вставляется все в {{{body}}} )
}); */

app.use('/', regofUser);
app.use('/main', uploadRouter);
app.listen(PORT, () => console.log(`Connection on PORT: ${PORT}`));
