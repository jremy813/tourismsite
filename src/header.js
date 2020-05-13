import React from "react";
import "./header.css";

function Header() {
  function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }

  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }
  return (
    <div className="header">
      <nav>
        <div className="logo">
          <h1>Tourism</h1>
        </div>

        <div id="myNav" className="overlay">
          <a className="closebtn" onClick={closeNav}>
            &times;
          </a>
          <div className="overlay-content menu">
            <a>Home</a>
            <a>Features</a>
            <a>Contacts</a>
          </div>
        </div>
        <span onClick={openNav}>
          <i class="fas fa-bars"></i>
        </span>
      </nav>
    </div>
  );
}

export default Header;
