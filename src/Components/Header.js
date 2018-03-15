import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
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
        <a href="https://github.com/retrofuturejosh/react-modular-audio-player">
          <div className="button-link">View on GitHub</div>
        </a>
        {window.location.hash === "#/docs" ? (
          <Link to="/examples">
            <div className="button-link">View Examples</div>
          </Link>
        ) : (
          <Link to="/docs">
            <div className="button-link">View Docs</div>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
