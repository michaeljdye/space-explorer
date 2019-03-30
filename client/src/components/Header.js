import React from 'react';
import { Link } from '@reach/router';
import 'tachyons';

const Header = () => {
  return (
    <header>
      <div className="cover mb4 bg-left bg-center-l">
        <div className="pb2 pb2-m pb2-l">
          <nav className="dt w-100 mw8 center">
            <div className="dtc v-mid">
              <h1>
                <Link
                  to="/"
                  className="dib h2 black b no-underline pa1 grow-large"
                >
                  Space Explorer
                </Link>
              </h1>
            </div>
            <div className="dtc v-mid tr pa3">
              <Link
                className="f6 fw4 dim no-underline black dn dib-ns pv2 ph3"
                to="/"
              >
                Home
              </Link>
              <Link
                className="f6 fw4 dim no-underline black dn dib-ns pv2 ph3"
                to="/about"
              >
                About
              </Link>
              <Link
                className="f6 link dim ba bw1 ph3 pv2 mb2 dib black"
                to="/login"
              >
                Sign In
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
