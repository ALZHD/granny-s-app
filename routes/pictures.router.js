const router = require('express').Router();
const { Picture } = require('../db/models');

// /pictures/
router.post('/', async (req, res) => {
  const { text, url } = req.body; // забираем все из регБАДИ
  const newPictures = await Picture.create({ text, url, grenny_id: req.ip });
  res.json({ newPictures }); // передаем объект newPicture с таким же знач
});

module.exports = router;
