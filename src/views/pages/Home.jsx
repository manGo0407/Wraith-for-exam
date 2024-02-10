const React = require("react");
const Layout = require("../Layout");

module.exports = function Home({ login }) {
  return (
    <Layout login={login}>
      <div className="welcome">
        {login ? <h1>Привет, { login }</h1> : <h1>Добро пожаловать, гость!</h1>}
      </div>
      <div className="welcome-container">
        <div className="welcomeBtn">        
        {login ? (
          <p>
            { login }, добро пожаловать на экзаменационный сайт 
          </p>
        ) : (
          <p>
            Добро пожаловать на экзаменационный сайт 
          </p>
        )}
        {login ? (
          <></>
        ) : (
          <div className="centered__text">
            Что бы пользоваться полным функционалом сайта:
          </div>
        )}

        {login ? (
          <></>
        ) : (
          <div className="buttons__list">
            <a href="/login">
              <button className="button green" type="button">
                Войти
              </button>
            </a>
            <a href="/register">
              <button className="button green" type="button">
                Зарегиться
              </button>
            </a>
          </div>
        )}
        </div>
      </div>
    </Layout>
  );
};
