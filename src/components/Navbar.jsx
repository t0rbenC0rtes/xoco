import React from "react";

const Navbar = ({ setLanguage }) => {
  return (
    <div className="navbar">
      <button onClick={() => setLanguage("nl")}>NL</button>
      <button onClick={() => setLanguage("fr")}>FR</button>
      <button onClick={() => setLanguage("en")}>EN</button>
      <button onClick={() => setLanguage("es")}>ES</button>
    </div>
  );
};

export default Navbar;
