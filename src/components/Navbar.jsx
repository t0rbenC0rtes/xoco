import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Navbar = ({ language, setLanguage }) => {
	const [showNavbar, setShowNavbar] = useState(true);

	useEffect(() => {
		let lastScrollY = window.scrollY;

		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			setShowNavbar(currentScrollY < lastScrollY);
			lastScrollY = currentScrollY;
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

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
			{["nl", "fr", "en", "es"].map((lang) => (
				<button
					key={lang}
					className={`lang-btn ${language === lang ? "active" : ""}`}
					onClick={() => {
						setLanguage(lang);
						console.log("Current language:", language);
					}}
				>
					{lang.toUpperCase()}
				</button>
			))}
		</motion.div>
	);
};

export default Navbar;
