const React = require('react');
const Layout = require('../Layout');

module.exports = function Login() {
  return (
    <Layout>
      <script defer src='/js/log.js'></script>
      <div className="loginPage">
        <form
          action="/login"
          method="POST"
          id="loginForm"
          className="formContainer"
        >
          <h2 style={{ marginBottom: '20px' }}>Login</h2> 
          <input
            name="login"
            type="text"
            className="input__area input__login"
            id="loginInput"
            placeholder="Enter your login"
            style={{ marginBottom: '10px' }} 
          />
          <input
            name="password"
            type="password"
            className="input__area  input__password "
            id="passwordInput"
            placeholder="Enter your password"
            style={{ marginBottom: '20px' }} 
          />

          <button className="button green" type="submit">
            Sign In 
          </button>
        </form>
      
      <div className="msgAlert"></div>
      <div className="msg" style={{ display: 'none' }}>
          <h4 className='regLogmsg'>Welcome Back!</h4>
      </div>
      </div>
    </Layout>
  )
}