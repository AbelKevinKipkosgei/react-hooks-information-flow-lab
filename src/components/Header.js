import React from "react";

function Header({ onDarkModeClick, buttonMode = "Light" }) {
  return (
    <header>
      <h2>Shopster</h2>
      <button onClick={onDarkModeClick}>{buttonMode} Mode</button>
    </header>
  );
}
export default Header;
