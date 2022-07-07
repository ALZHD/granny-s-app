const router = require('express').Router();

router
  .route('/signup')
  .post((req, res) => {
    console.log(req.body);
    
  });

// const express = require('express');
// const { default: ModelManager } = require('sequelize/types/model-manager');
// // const bcrypt = require('bcrypt');
// const { User } = require('../db/models');
// const router = require
// const logger = console;
// const router = express.Router();

// router
//   .route('/signup')
//   // Страница аутентификации пользователя
//   .get((req, res) => res.render('signin'))
//   // Аутентификация пользователя
//   .post(async (req, res) => {
//     console.log(req.body);
//     const {
//       name, email, secret, pass,
//     } = req.body;
//     try {
//       // Пытаемся сначала найти пользователя в БД
//       const user = await User.findOne({
//         where: {
//           username,
//         },
//         raw: true,
//       });
//       if (!user) {
//         return res.render('error');
//       }
//       // Сравниваем хэш в БД с хэшем введённого пароля
//       const isValidPassword = await bcrypt.compare(password, user.password);
//       if (!isValidPassword) {
//         return res.render('error');
//       }
//       req.session.username = user.username;
//       req.session.role = user.role;
//     } catch (err) {
//       logger.error(err);
//       return res.render('error');
//     }
//     return res.end();
//   });

// router
//   .route('/signup')
//   // Страница регистрации пользователя
//   .get((req, res) => res.render('signup'))
//   // Регистрация пользователя
//   .post(async (req, res) => {
//     const {
//       username, password, email, secret, role,
//     } = req.body;
//     try {
//       // Мы не храним пароль в БД, только его хэш
//       const saltRounds = Number(process.env.SALT_ROUNDS ?? 10);
//       const hashedPassword = await bcrypt.hash(password, saltRounds);
//       const user = await User.create({
//         username,
//         password: hashedPassword,
//         email,
//         secret,
//         role,
//       });
//       req.session.username = user.username;
//       req.session.username = user.role;
//     } catch (err) {
//       logger.error(err);
//       return res.render('error'); // конкретизировать ошибку
//     }
//     return res.end();
//   });

// router.get('/signout', (req, res) => {
//   req.session.destroy();
//   res.clearCookie('user_sid');
//   res.redirect('/');
// });

module.exports = router;
