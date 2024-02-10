const express = require('express');
const bcrypt = require('bcrypt');
const regRouter = express.Router();
const renderTemplate = require('../lib/renderTemplate');
const Register = require('../views/pages/Register');
const { User } = require('../../db/models');

regRouter.get('/', (req, res) => {
  renderTemplate(Register, null, res);
});

regRouter.post('/', async (req, res) => {
  const { login, password, email } = req.body;
  try {
    const user = await User.findOne({ where: { login } });
    if (user) {
      res.json({ err: 'Такой пользователь уже существует!' });
    } else {
      const hash = await bcrypt.hash(password, 10);
      const newUser = await User.create({ login, password: hash, email });
      req.session.login = newUser.login;
      req.session.userId = newUser.id;
      req.session.save(() => {
        res.json({ msg: 'Пользователь зарегистрирован!' });
      });
    }
  } catch (error) {
    res.send(`Error ------> ${error}`);
  }
});

module.exports = regRouter;