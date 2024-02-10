const React = require("react");
module.exports = function Layout({ children, login }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Concert+One&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="stylesheet" href="/css/normalize.css" />
        <title>Exam</title>
      </head>
      <body>
        <nav className="navbar">
          <div className="navbarContainer">
            <a className="home" href="/">
              Home
            </a>
            {login ? (
              <>
                <a href="/#">Any</a>
                <a href="/#">Any</a>
                <a href="/logout">Logout</a>
              </>
            ) : (
              <>
                <div className="nav-item">
                  <a className="nav-link" href="/login">
                    Sign In
                  </a>
                </div>
                <div className="nav-item">
                  <a className="nav-link" href="/register">
                    Sign Up
                  </a>
                </div>
              </>
            )}
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
};