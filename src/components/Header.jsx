import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { SiOpenstreetmap } from "react-icons/si";
import Logo from "./Logo";

const Header = ({ translations }) => {
	const scrollToSection = () => {
		const section = document.getElementById("map-section");
		if (section) {
			section.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<div className="card-wrapper" id="header">
			<motion.div
				initial={{ y: 20, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.8, delay: 0.2 }}
				viewport={{ once: false }}
				className="card-text"
			>
				<Logo />
				<div className="header-buttons">
					<Link to="/pralines" className="pralines-menu-btn">
						<button>
							{translations["nav"]?.pralines}
							<FaArrowRight />
						</button>
					</Link>
					<button onClick={scrollToSection} className="icon">
						<SiOpenstreetmap />
					</button>
				</div>
				<h3>{translations["header"]?.title}</h3>
			</motion.div>
		</div>
	);
};

export default Header;
