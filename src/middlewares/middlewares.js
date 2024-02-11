const checkUser = (req, res, next) => {
    if (req.session.login) {
      next();
    } else {
      res.redirect('/log');
    }
  };
  
  const secureRoute = (req, res, next) => {
    if (!req.session.login) {
      next();
    } else {
      res.redirect('/main');
    }
  };
  
  function protectFromDelete(req, res, next) {
    if (req.method !== 'DELETE') {
        return res.status(403).send('Доступ запрещен'); 
    }
    next(); 
}
  
  module.exports = { checkUser, secureRoute, protectFromDelete };