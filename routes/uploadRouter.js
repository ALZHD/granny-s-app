const router = require('express').Router();
// const multer = require('../middlewares/upload')
const multer = require('multer');
// два пакета для загрузки файлов
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, './public/uploads');
  },
  filename(req, file, cb) {
    cb(null, `${file.originalname}`);
  },
});
const upload = multer({ storage });

// router.get("/", (req, res) => {
//   res.render("main");
// });

router.get('/', (req, res) => {
  res.render('main');
});
router.post('/upload', upload.single('image'), (req, res) => {
  console.log('test');
  console.log('asd', req.file);
  res.render('index');
});

module.exports = router;
