import React from "react";
import '../index.css';

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="wrapper">
          <div className="logo">
            <a href=""><img src="\img\Logo.png" alt="logo" /></a>
          </div>
          <nav>
            <ul className="wrapper">
              <li><a href="#">home</a></li>
              <li><a href="#">about</a></li>
              <li><a href="#">skills</a></li>
              <li><a href="#">service</a></li>
              <li><a href="#">work</a></li>
              <li><a href="#">testimonial</a></li>
              <li><a href="#">blog</a></li>
              <li><a href="#">team</a></li>
              <li><a href="#">contact</a></li>
              <li><a href="#"><img src="img\Search icon.png" className="search" alt="search" /></a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
export default Header;
