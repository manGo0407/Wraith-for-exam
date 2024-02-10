require("@babel/register");
require("dotenv").config();

const express = require("express");
const morgan = require("morgan");

const session = require("express-session");
const FileStore = require("session-file-store")(session);

const path = require("path");

/// тут будут ручки
const { checkUser, secureRoute } = require("./src/middlewares/middlewares");

const indexRouter = require("./src/routes/index.routes");
const regRouter = require("./src/routes/register.routes");
const logRouter = require("./src/routes/login.routes");

const { PORT } = process.env ?? 3100;

const app = express();

const sessionConfig = {
  name: "Cookie",
  store: new FileStore(),
  secret: process.env.SESSION_SECRET ?? "Session",
  resave: false,
  saveUninitialized: false, // * если false, куки появятся только при установке req.session
  cookie: {
    maxAge: 9999999,
    httpOnly: true,
  },
};

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(session(sessionConfig));

/// тут будут app.use
app.use('/login', logRouter)
app.use('/register', regRouter)
app.use('/', indexRouter)

app.get('/*', (req, res) => {
  res.redirect('/');
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});