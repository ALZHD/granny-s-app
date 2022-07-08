const router = require('express').Router();
// const multer = require('../middlewares/upload')
const multer = require('multer');
const { Picture } = require('../db/models');

// два пакета для загрузки файлов
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, './public/uploads');
  },
  filename(req, file, cb) {
    cb(null, `${Date.now()}-.${file.mimetype.slice(6)}`);
  },
});
const upload = multer({ storage });

// router.get("/", (req, res) => {
//   res.render("main");
// });

router.get('/', async (req, res) => {
  const { user_id } = req.session;
  const allPictures = await Picture.findAll({ where: { granny_id: user_id }, raw: true });

  res.render('main', { allPictures });
});
router.post('/upload', upload.single('image'), async (req, res) => {
  const { user_id } = req.session;
  await Picture.create({
    granny_id: user_id, url: req.file.path.replace('public', ''),
  });

  console.log('test');
  console.log('asd', req.file);
  res.json({ message: 'ok' });
});

module.exports = router;
