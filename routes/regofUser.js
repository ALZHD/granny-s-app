const express = require('express');
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

const logger = console;
const router = require('express').Router();

router.route('/').get((req, res) => {
  res.render('index');
});

router
  .route('/signup')
  // Страница регистрации пользователя
  .get((req, res) => res.render('index'))
  // Регистрация пользователя
  .post(async (req, res) => {
    // console.log(req.body);
    const {
      name, pass, email, secret, role,
    } = req.body;
    try {
      // Мы не храним пароль в БД, только его хэш
      // console.log(password);
      const hashedPassword = await bcrypt.hash(pass, 5);

      const emailCheck = await User.findOne({ where: { email } });
      if (emailCheck) {
        return res
          .status(501)
          .json({ isFail: 'Такой email уже зарегистрирован' });
      }
      const secretCheck = await User.findOne({ where: { secret } });
      if (secretCheck) {
        return res
          .status(501)
          .json({ isFail: 'Придумайте другое секретное слово.' });
      }
      const user = await User.create({
        name,
        email,
        secret,
        pass: hashedPassword,
        role,
      });
      req.session.name = user.name;
      req.session.role = user.role;
      req.session.user_id = user.id;
      return res.send({});
    } catch (err) {
      logger.error(err);
      return res.status(501).json({ isFail: 'Непредвиденная ошибка' });
    }
  });

router
  .route('/signin')
  // Страница аутентификации пользователя
  // .get((req, res) => res.render('signin'))
  // Аутентификация пользователя
  .post(async (req, res) => {
    // console.log(req.body, '<<<<<<<<<<< аутентификация');
    const { email, pass } = req.body;
    try {
      // Пытаемся сначала найти пользователя в БД
      const user = await User.findOne({ where: { email } });
      if (!user) {
        console.log(123);
        return res.status(501).json({ isFail: 'Такой бабушки или внучки нет!' });
      }
      // Сравниваем хэш в БД с хэшем введённого пароля
      if (await bcrypt.compare(pass, user.pass)) {
        req.session.name = user.name;
        req.session.role = user.role;
        req.session.user_id = user.id;
        // return res.sendStatus(200);
        // было res.send({})
        return res.send({ message: 'ok' });
      }

      return res.status(501).json({ isFail: 'Не верный пароль!' });
    } catch (err) {
      console.log(123);
      logger.error(err);
      return res.status(501).json({ isFail: 'Не верный логин или пароль' });
    }
    // return res.end();
  });

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('user_sid');
  res.redirect('/');
});

module.exports = router;
