const router = require('express').Router();
const { Picture } = require('../db/models');

router.get('/', async (req, res) => {
  const allPictures = await Picture.findAll(); // находим все картинки из базы данных
  res.render('main', { allPictures }); //
});

module.exports = router;
