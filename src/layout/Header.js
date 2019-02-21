import React from "react";

function Header() {
  return (
    <header className="header-page">
      <a href="#">
        <img className="logo" src="https://picsum.photos/90/40" alt="logo" />
      </a>
      <a href="#" className="nav-profile">
        <img src="https://picsum.photos/40" alt="logo" />
        <span>Admin</span>
      </a>
    </header>
  );
}

export default Header;
