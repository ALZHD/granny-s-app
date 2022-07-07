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

const FileStore = sessionFileStore(session);
// app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
hbs.registerPartials(path.join(process.env.PWD, 'views', 'partials')); // 10

app.use(express.urlencoded({ extended: true })); // чтобы парсить форма
app.use(express.json()); // чтобы парсить json
app.use(session({
  name: app.get('session cookie name'),
  secret: process.env.SESSION_SECRET,
  store: new FileStore({
    // Шифрование сессии
    secret: process.env.SESSION_SECRET,
  }),
  // Если true, сохраняет сессию, даже если она не поменялась
  resave: false,
  // Если false, куки появляются только при установке req.session
  saveUninitialized: false,
  cookie: {
    // В продакшне нужно "secure: true" для HTTPS
    secure: process.env.NODE_ENV === 'production',
  },
}));
app.use(express.static(path.join(__dirname, 'public')));
const PORT = process.env.PORT || 3001; 

/* app.get('/', (req, res) => { // чтобы проверить что это работает делаем ручку
  res.render('index'); // при запросе на эту ручку рендерим с index --> npm start (как работает render? Берется все что находится в индексе  и как бы вставляется все в {{{body}}} )
}); */
app.use('/', indexRouter);
app.use('/pictures', pictureRouter);
/* app.use('/', regofUser);  */
app.listen(PORT, () => console.log(`Connection on PORT: ${PORT}`)); 
