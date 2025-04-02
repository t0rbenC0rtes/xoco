import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Navbar = ({ setLanguage }) => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.div
      className="navbar"
      initial={{ y: 0 }}
      animate={{ y: showNavbar ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      style={{
        position: "fixed",
        top: 10,
        right: 10,
        zIndex: 1000,
      }}
    >
      <button onClick={() => setLanguage("nl")}>NL</button>
      <button onClick={() => setLanguage("fr")}>FR</button>
      <button onClick={() => setLanguage("en")}>EN</button>
      <button onClick={() => setLanguage("es")}>ES</button>
    </motion.div>
  );
};

export default Navbar;
