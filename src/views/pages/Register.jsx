const React = require("react");

const Layout = require("../Layout");

module.exports = function Register() {
  return (
    <Layout>
      <script defer src="/js/reg.js"></script>
      <div className="regPage">
        <form action="/register" method="POST" id="regForm" className="regFormContainer">
        <h2 style={{ marginBottom: '20px' }}>Registration</h2>
          <input
            name="login"
            type="text"
            className="regInput"
            placeholder="Login"
          />
          <input
            name="email"
            type="email"
            className="regInput"
            placeholder="Email Address"
          />
          <input
            name="password"
            type="password"
            className="regInput"
            placeholder="Enter your password"
          />
          <button className="regButton" type="submit">
            Sign In!
          </button>
        </form>

        <div className="msgAlert"></div>
        <div className="msg" style={{ display: 'none' }}>
          <h4 className='regLogmsg'>Добро пожаловать на экзаменационный сайт!</h4>
        </div>

      </div>
    </Layout>
  );
};
