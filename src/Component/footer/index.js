import React from "react";
import { NavLink } from "react-router-dom";
import { IconLink } from "../animateClick";

const Footer = () => {
  const ScrollUp = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div className="footers" id="footer">
        <div className="footer-1">
          <div className="footer-1-1">
            <h2 className="abouttitle">
              <NavLink to="/" onClick={ScrollUp}>
                Technotaught
              </NavLink>
            </h2>
            <p className="aboutdescription">
              Technotaught is a blog based dummy site just for knowledge
              purposes created by{" "}
              <a href="https://github.com/vishwaashish">
                Ashishkumar Vishwakarma
              </a>
              . If you have any questions or suggestions about a look, feel, or
              anything. Please let us know.
            </p>
            <p>
              Email :{" "}
              <a href="mailto:vishwakarmaashish165@gmail.com">
                vishwakarmaashish165@gmail.com
              </a>
            </p>
          </div>
          <div className="footer-1-2">
            <h4>Help</h4>

            <ul>
              <li>
                <a href="mailto:vishwakarmaashish165@gmail.com">
                  Talk to Support{" "}
                </a>
              </li>
              <li>
                <a href="https://github.com/vishwaashish">Github account </a>
              </li>
              <li>
                <a href="https://github.com/vishwaashish/React-blogsite">
                  Docs
                </a>
              </li>
              <li>
                <a href="https://technotaught.com/blogs">Technotaught Blog</a>
              </li>
            </ul>
          </div>
          <div className="footer-1-3">
            <h4>Company</h4>
            <ul>
              <li>
                <NavLink to="/" onClick={ScrollUp}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/blog" onClick={ScrollUp}>
                  Blog
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-2">
          <p>
            &#9400; 2022{" "}
            <a href="https://github.com/vishwaashish">
              Ashishkumar Vishwakarma
            </a>
          </p>
          <div className="social-icon">
            <IconLink href={`https://www.facebook.com/imvishwaashish`}>
              <i className="fab fa-facebook" />
            </IconLink>
            <IconLink
              href={`https://www.linkedin.com/in/ashishkumar-vishwakarma/`}
            >
              <i className="fab fa-linkedin" />
            </IconLink>

            <IconLink href={`https://wa.me/8424847449`}>
              <i className="fab fa-whatsapp" />
            </IconLink>
            <IconLink href={`mailto:vishwakarmaashish165@gmail.com`}>
              <i className="fas fa-envelope" />
            </IconLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default React.memo(Footer);
