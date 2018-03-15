import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  console.log(window.location.hash);
  return (
    <header className="demo-header">
      <div className="social-media">
        <a href="http://www.joshdsohn.com">joshdsohn.com</a>
        <a
          className="github-button"
          href="https://github.com/retrofuturejosh/react-modular-audio-player"
          aria-label="Star retrofuturejosh/react-modular-audio-player on GitHub"
        >
          Star
        </a>
      </div>
      <div className="sound-icon">
        <img
          alt=""
          id="sound"
          src="https://github.com/retrofuturejosh/demo-react-modular-audio-player/blob/master/public/levels.png?raw=true"
        />
      </div>
      <h1 className="demo-header-title">react-modular-audio-player</h1>
      <p id="header-info"> Create custom audio players in React </p>
      <div className="header-buttons">
        <div
          className="button-link"
          onClick={e => {
            window.location.href =
              "https://github.com/retrofuturejosh/react-modular-audio-player";
          }}
        >
          View on GitHub
        </div>
        {window.location.hash === "#/docs" ? (
          <div
            className="button-link"
            onClick={e => {
              window.location.href =
                "https://www.npmjs.com/package/react-modular-audio-player";
            }}
          >
            View Examples
          </div>
        ) : (
          <Link to="/docs">
          <div
            className="button-link"
          >
            View Docs
          </div>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
