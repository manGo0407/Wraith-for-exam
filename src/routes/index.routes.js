const express = require('express');
const renderTemplate = require('../lib/renderTemplate');
const Home = require('../views/pages/Home');
const indexRouter = express.Router();

indexRouter.get('/',  (req, res) => {
  const { login } = req.session;
  renderTemplate(Home, { login }, res)
});

indexRouter.get('/logout', (req, res) => {
  console.log('Вышли в logout');
  req.session.destroy(() => {
    res.clearCookie('Cookie');
    res.redirect('/');
  });
});

module.exports = indexRouter;