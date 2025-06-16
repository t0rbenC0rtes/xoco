import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";


const Header = ({ translations }) => {
	return (
		<div className="card-wrapper">
			<motion.div
				initial={{ y: 20, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.8, delay: 0.2 }}
				viewport={{ once: false }}
				className="card-text"
			>
				<h1>Xocolate</h1>
				<Link to="/pralines" className="pralines-menu-btn">
					<button>{translations["nav"]?.pralines}<FaArrowRight /></button>
				</Link>
				<h3>{translations["header"]?.title}</h3>
			</motion.div>
		</div>
	);
};

export default Header;
